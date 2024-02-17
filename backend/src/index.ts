import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/patient";

const app = express();
const PORT = 3000;

// middleware
dotenv.config();
app.use(express.json());
app.use(cors());

// routing
app.use("/api/patient", router);

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
