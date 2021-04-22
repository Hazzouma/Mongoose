const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

module.exports = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      dbName: process.env.dbName,
      user: process.env.user,
      pass: process.env.pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("MongoDB connected successfully!");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
