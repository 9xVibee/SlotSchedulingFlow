import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

// middleware
dotenv.config();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
