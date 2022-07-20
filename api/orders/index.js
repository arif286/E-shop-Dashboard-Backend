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

const fetchAllOrders = async (req, res) => {
    try {
        let orders = await mongo.fetchMany(
        mongoDbUri,
        process.env.MONGO_DB,
        'orders'
    )
    return res.status(200).json({
      success: true,
      data: orders
    });
    } catch (error) {
      return res.status(400).json({
      success: false,
      error,
    });

    }
}
const insertOrders = async (req, res) => {
    try {
        const payload = req.body;
        let orders = await mongo.insertMany(
        mongoDbUri,
        process.env.MONGO_DB,
        'orders',
        payload
    )
    return res.status(200).json({
      success: true,
      data: orders
    });
    } catch (error) {
      return res.status(400).json({
      success: false,
      error,
    });

    }
}
router.get('/orders',fetchAllOrders);
router.post('/orders',insertOrders);

module.exports = router;