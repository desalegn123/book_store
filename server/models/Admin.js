import mongoose from "mongoose";
const adminSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const adminModel = mongoose.model("Admin", adminSchema);
export { adminModel as Admin };
