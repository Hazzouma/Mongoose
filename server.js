const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const personRoute = require("./routes/personRoute");

app.use(express.json());

connectDB();

app.use("/persons", personRoute);

const port = process.env.PORT;
app.listen(port, (err) =>
  err ? console.log("error") : console.log(`server is running on port ${port}`)
);
