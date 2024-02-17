import express, { Request, Response } from "express";
import { createPhysio, loginPhysio, requestSlot } from "../controllers/physioController";
// import { CreatePatient, LoginPatient } from "../controllers/patientControllers";

const router = express.Router();

router.post("/create", createPhysio);
router.post("/login", loginPhysio);
router.post('/slots', requestSlot)

export { router};
