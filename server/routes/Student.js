import express from "express";
import { Student } from "../models/Student.js";
// import { verifyAdmin } from "./auth.js";
// import { verifyStudent } from "./auth.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
const router = express.Router();
router.post("/register", async (req, res) => {
  try {
    const { roll, username, password, grade } = req.body;
    const student = await Student.findOne({ username });
    if (student) {
      return res.json({ message: "student is registered" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newStudent = new Student({
      username,
      password: hashpassword,
      roll: roll,
      grade,
    });
    await newStudent.save();
    return res.json({ registered: true });
  } catch (err) {
    return res.json({ message: "error in registering student" });
  }
});
export { router as studentRouter };
