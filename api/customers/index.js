const router = require("express").Router();
const mongo = require(`${root}/services/mongo-crud`);
const { generateMongoDbUri } = require(`${root}/services/mongo-uri`);

const mongoDbUri = generateMongoDbUri(
  process.env.MONGO_USER,
  process.env.MONGO_PASSWORD,
  process.env.MONGO_HOST,
  process.env.MONGO_DB
);

const fetchAllCustomers = async (req, res) => {
    try {
        let customers = await mongo.fetchMany(
        mongoDbUri,
        process.env.MONGO_DB,
        'customers'
    )
    return res.status(200).json({
      success: true,
      data: customers
    });
    } catch (error) {
      return res.status(400).json({
      success: false,
      error,
    });

    }
}
const insertCustomers = async (req, res) => {
    try {
        const payload = req.body;
        let customers = await mongo.insertMany(
        mongoDbUri,
        process.env.MONGO_DB,
        'customers',
        payload
    )
    return res.status(200).json({
      success: true,
      data: customers
    });
    } catch (error) {
      return res.status(400).json({
      success: false,
      error,
    });

    }
}
router.get('/orders',fetchAllCustomers);
router.post('/orders',insertCustomers);

module.exports = router;