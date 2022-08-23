const { MongoClient } = require("mongodb");

let dbConnection;
module.exports = {
  // first function
  connectToDb: (cb) => {
    MongoClient.connect("mongo://localhost:27017/bookstore")
      .then((client) => {
        dbConnection = client.db();
        return cb;
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  // second function
  getDb: () => {},
};
