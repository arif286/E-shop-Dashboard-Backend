const express = require("express");
const cors = require("cors");

const app = express();
global.app = app;
app.use(cors());
app.use(express.json());


app.disable("x-powered-by");
const app_url = process.env.APP_URL;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", app_url);
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, AuthToken, cache-control"
  );
  res.setHeader("Cache-Control", "no-transform");
  next();
});

// require("./middleware")(app);

app.use("/api", require("./api/orders"));
app.use("/api", require("./api/customers"));
app.use("/api", require("./api/employees"));
app.use("/api", require("./api/chart"));


module.exports = app;
