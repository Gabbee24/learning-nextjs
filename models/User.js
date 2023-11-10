import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    username:{type:String, unique:true, required:true},
    email:{type:String, unique:true, required:true},
    password:{type:String, unique:true, required:true},
},{timestamps:true});

export const User = models.User || model("User",UserSchema)
// export default mongoose.model("User", UserSchema)