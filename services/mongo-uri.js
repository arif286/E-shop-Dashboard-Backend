// Mongodb connection string statements
const mongo_prefix =
  process.env.NODE_ENV === "development" ? "mongodb" : "mongodb+srv";
const args = `?retryWrites=true&w=majority`;

module.exports = {
  generateMongoDbUri(user, password, host, db) {
    if (process.env.NODE_ENV === "development") {
      return `${mongo_prefix}://${user}:${password}@${host}/${db}${args}`;
    }
   return `${mongo_prefix}://${user}:${password}@cluster0.mnfgc.mongodb.net/${db}${args}`
  }
};
