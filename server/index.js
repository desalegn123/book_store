import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieparser from "cookie-parser";
import "./db.js";
import { AdminRouter } from "./routes/auth.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieparser());
dotenv.config();
app.use("/auth", AdminRouter);
app.listen(process.env.PORT, () => {
  console.log("server is runinnig");
});
