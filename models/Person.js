const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  email: { type: String },
  favouriteFoods: [
    {
      type: String,
    },
  ],
});

const personModel = mongoose.model("Person", personSchema);

module.exports = personModel;
