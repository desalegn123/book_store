import express from "express";
import { Admin } from "../models/Admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
const router = express.Router();
dotenv.config();
router.post("/login", async (req, res) => {
  const { username, password, role } = req.body;
  if (role === "admin") {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.json({ message: "admin not registered" });
    }
    const validpassword = await bcrypt.compare(password, admin.password);
    if (!validpassword) {
      return res.json({ message: "wrong password" });
    }
    const token = jwt.sign(
      { username: admin.username, role: "admin" },
      process.env.Admin_key
    );
    res.cookie('token', token, { httpOnly: true, secure: true });
    return res.json({ login: true, role: "admin" });
  } else if (role === "student") {
  } else {
  }
});
export { router as AdminRouter };
