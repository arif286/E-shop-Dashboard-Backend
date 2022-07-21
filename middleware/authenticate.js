const jwt = require("jsonwebtoken");
const admin = require("firebase-admin");
const root = require("app-root-path");
const config = require(`${root}/config`);

if (process.env.CLOUD_ENV !== "production") {
  admin.initializeApp({
    projectId: process.env.GCP_DATA_PROJECT
  });
} else {
  const firebaseCredsObj = JSON.parse(process.env.FIREBASE_CREDS);

  async function initializeFirebaseAdmin() {
    console.log("Initializing Firebase App");
    admin.initializeApp({
      projectId: process.env.GCP_DATA_PROJECT,
      credential: admin.credential.cert({
        projectId: process.env.GCP_DATA_PROJECT,
        privateKey: firebaseCredsObj.private_key,
        clientEmail: firebaseCredsObj.client_email
      })
    });
  }
  initializeFirebaseAdmin();
}

module.exports = {
  authRoute: async (req, res, next) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, config.session.jwt_secret);
      const firebase_user = await admin.auth().getUser(decoded.uid);
      if (decoded.email != firebase_user.email || firebase_user.disabled) {
        return res.status(403).json({ error: "Not authorized " });
      }
      try {
        req.fb_user_id = decoded.uid;
        req.auth_user_id = req.session.current_user_id;
        req.auth_org_id = req.session.current_org_id;
        req.auth_role = req.session.current_user_role;
        req.auth_session_id = req.session.current_session_id;
        next();
      } catch (err) {
        console.log(err);
        return res.status(403).send("Unauthorized");
      }
    } else {
      return res.status(403).send("Unauthorized");
    }
  },
  firebaseClient: admin
};
