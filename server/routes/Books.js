import express from "express";
import { Book } from "../models/Book.js";

// import { verifyAdmin } from "./auth.js";
// import { verifyStudent } from "./auth.js";


const router = express.Router();
router.post("/add", async (req, res) => {
  try {
    const { name, author, imageUrl} = req.body;
    const newbook=new Book({
        name,
        author,
        imageUrl
    })
    await newbook.save()
    return res.json({added:true})
    } catch (err) {
    return res.json({ message: "error in adding book" });
  }
});
router.get('/books',async(req,res)=>{
  try{
    const books=await Book.find()
    return res.json(books)


  }catch(err){
    return res.json(err)
  }
})
export { router as bookRouter };
