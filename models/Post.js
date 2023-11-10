import mongoose, { Schema, models, model } from "mongoose";

const PostSchema = new Schema({
    title:{type:String, unique:true, required:true},
    desc:{type:String, unique:true, required:true},
    img:{type:String, unique:true, required:true},
    content:{type:String, unique:true, required:true},
    username:{type:String, unique:true, required:true},
},{timestamps:true});

// export default mongoose.model("Post",PostSchema)
export const Post = models.Post || model("Post",PostSchema)
