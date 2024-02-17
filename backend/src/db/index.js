import mongoose, { Mongoose, mongo } from "mongoose";
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

const AdminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    role: "admin",
  },
});

const SlotSchema = new mongoose.Schema({
  physioName: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Physio",
  },
  remark: String,
  weekStart: String,
  weekEnd: String,
  date: String,
  day: String,
  isAllocated: {
    type: Boolean,
    default: false,
  },
  slotStartTime: String,
  slotEndTime: String,
});

const PhysioSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    role: "physio",
  },
});

const Patient = mongoose.model("Patient", PatientSchema);
const Physio = mongoose.model("Physio", PhysioSchema);
const Admin = mongoose.model("Admin", AdminSchema);
const Slots = mongoose.model("Slots", SlotSchema);
export { Patient, Admin, Physio, Slots };
