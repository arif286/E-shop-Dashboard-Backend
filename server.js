const root = require("app-root-path");
require("dotenv").config();

const app = require(`${root}/index`);

const port = process.env.PORT;
app.listen(port, () => {
console.log(`Server listening on http://localhost:${port}`);

});
