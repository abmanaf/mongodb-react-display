const mongoose = require("mongoose");
const Schema = mongoose(Schema);

const studentsSchema = new mongoose.Schema({
  name: { type: String, require: true },
  course: String,
  age: Number,
  fullTime: String,
});

const studentModel = mongoose.model("students", studentsSchema);

module.exports = studentModel;
