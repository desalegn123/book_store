import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const connection=async()=>{
    try{
        mongoose.connect(process.env.URL)
        console.log("connected")
    }
    catch(err){
        console.log("error:",err)
    }
    }
    connection()
