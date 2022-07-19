const http = require("http");
const root = require("app-root-path");
require("dotenv").config();

const app = require(`${root}/index`);
const server = http.createServer(app);

const host = process.env.HOST;
const port = process.env.PORT;
server.listen(port, host);

console.log(`Server listening on http://${host}:${port}`);
