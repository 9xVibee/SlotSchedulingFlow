import mongoose from "mongoose";
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/slotscheduling");
const conn = mongoose.connection;

// loggin message on database connect
conn.once("open", () => {
  console.log("Database connected");
});

// if any error occurs
conn.on("error", (err) => {
  console.log("Error in MongoDb ", err);
});

const PatientSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    role: "patient",
  },
});

const Patient = mongoose.model("Patient", PatientSchema);
export { Patient };
