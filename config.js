const config = module.exports;

config.session = {
  secret: process.env.SESSION_SECRET,
  token_expiry: "2h",
  cookie_token_expiry: 7200,
  refresh_token_expiry: 86400,
  jwt_secret: "lkmaspokjsafpaoskdpa8asda0s9a"
};