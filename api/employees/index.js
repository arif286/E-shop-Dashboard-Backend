const router = require("express").Router();
const root = require("app-root-path");
const mongo = require(`${root}/services/mongo-crud`);
const { generateMongoDbUri } = require(`${root}/services/mongo-uri`);

const mongoDbUri = generateMongoDbUri(
  process.env.MONGO_USER,
  process.env.MONGO_PASSWORD,
  process.env.MONGO_HOST,
  process.env.MONGO_DB
);

const fetchAllEmployees = async (req, res) => {
    try {
        let employees = await mongo.fetchMany(
        mongoDbUri,
        process.env.MONGO_DB,
        'employees'
    )
    return res.status(200).json({
      success: true,
      data: employees
    });
    } catch (error) {
      return res.status(400).json({
      success: false,
      error,
    });

    }
}
const insertEmployees = async (req, res) => {
    try {
        const payload = req.body;
        let employees = await mongo.insertMany(
        mongoDbUri,
        process.env.MONGO_DB,
        'employees',
        payload
    )
    return res.status(200).json({
      success: true,
      data: employees
    });
    } catch (error) {
      return res.status(400).json({
      success: false,
      error,
    });

    }
}
router.get('/employees',fetchAllEmployees);
router.post('/employees',insertEmployees);

module.exports = router;