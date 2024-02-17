import express, { Request, Response } from "express";
import { Patient } from "./../db/index.js";

const router = express.Router();

const CreatePatient = async (req: Request, res: Response) => {
  const { name, role, email, password } = req.body;

  const patient = await Patient.create({
    name,
    role,
    password,
    email,
  });

  res.status(200).json({
    patient,
  });
};

router.post("/create", CreatePatient);
export default router;
