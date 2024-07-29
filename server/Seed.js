import express from "express";
import bcrypt from "bcrypt";
import { Admin } from "./models/Admin.js";
import "./db.js"
async function AdminAccount() {
    try {
      const admin = await Admin.findOne({ username: "admin" });
      if (!admin) {
        // Create a new admin account
        const hashpassword = await bcrypt.hash("adminpassword", 10);
        const newAdmin = new Admin({
          username: "admin",
          password: hashpassword,
        });
        await newAdmin.save();
        console.log("New account created");
      } else {
        // Update the existing admin account
        const hashpassword = await bcrypt.hash("adminpassword", 10);
        admin.password = hashpassword;
        await admin.save();
        console.log("Account updated");
      }
    } catch (err) {
      console.log("error:", err);
    }
  }
  
  AdminAccount();