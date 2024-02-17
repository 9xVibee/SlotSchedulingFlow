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
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("okay");
});

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
