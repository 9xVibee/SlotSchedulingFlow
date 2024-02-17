import { Request, Response } from "express";
import { Admin, Patient, Physio, Slots } from "../db";
import { AdminType, PhysioType, SlotsType } from "../types";

export const createPhysio = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const physio = await Physio.create({
    name,
    password,
    email,
  });

  res.status(200).json({
    physio,
  });
};

// login patient
export const loginPhysio = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const physio: PhysioType | null = await Physio.findOne({
    email,
  });

  if (!physio) {
    return res.status(500).json({
      message: "Admin not found with this email",
    });
  }

  if (physio.password !== password) {
    return res.status(500).json({
      message: "Password is wrong",
    });
  }

  res.status(200).json({
    physio,
    message: "Login successfull",
  });
};

export const requestSlot = async (req: Request, res: Response) => {
  const { date, weekStart, weekEnd, slotStartTime, email, day, slotEndTime } =
    req.body;

  if (!date && !slotStartTime) {
    return res.status(400).json({
      message: "Please provide date and slot time",
    });
  }

  const physio = await Physio.findOne({ email });

  let slot = await Slots.findOne({
    createdBy: physio._id,
    isAllocated: false,
    $and: [
      { day: day },
      {
        slotStartTime: { $lte: slotStartTime },
      },
      { slotEndTime: { $gt: slotStartTime } },
    ],
  });

  if (slot) {
    return res.status(500).json({
      message: "Slots is occupied",
    });
  }

  slot = await Slots.create({
    createdBy: physio._id,
    weekStart,
    weekEnd,
    date,
    day,
    slotStartTime,
    slotEndTime,
  });

  res.status(200).json({
    message: "Request submitted successfully",
    slot,
  });
};
