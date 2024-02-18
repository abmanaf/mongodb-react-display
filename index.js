// index.mjs

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentModel from "./Servers/models/students";
const app = express();
app.use(cors());
app.use(express.json());

//mongoose.connect("mongodb://localhost:27017/student");
mongoose.connect("mongodb://127.0.0.1:27017/student");
app.get("/getStudents", (req, res) => {
  studentModel.find().then(students => res.json(students)).catch(err => res.json(err));
});
app.listen(2000, () => {
  console.log("Our server is running successfully");
});
