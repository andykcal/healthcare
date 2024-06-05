import path from "path";
import User from "../models/User.js";
import fs from 'fs';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const updateUser = async(req,res,next) => {
    try{
        console.log(req.params.id)
        console.log(req.body)
        const updatedUser = await 
        User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new:true}
        );

        console.log("req.body:",req.body);
        res.status(200).json(updatedUser);
    }catch(err){
        next(err);
    }
}
export const delelteUser = async(req,res,next) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        try{
            await User.findByIdAndUpdate(userlId,{
                $pull: {posts: req.params.id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json("User has been deleted");
    }catch(err){
        next(err);
    }
}
export const getUser = async(req,res,next) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}
export const getUsers = async(req,res,next) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}
export const updateProfileImage=async(req,res,next)=>{
    try{
        const userId=req.params.id;
        const imgPath=req.file.path.replace(/\\/g,"/");
        console.log("New Image Path:", imgPath);
        if(!userId){
            return next(createError(400, "User ID is required"));
        }
        const user=await User.findById(userId);        
        if(!user){
            return next(createError(404, "User not found"));
        }        
        if(user.img){
            const oldImage=path.join(__dirname,'../',user.img);
            
            if(fs.existsSync(oldImage)){
                try{
                    fs.unlinkSync(oldImage);
                }catch{
                    return next(createError(500,"이미지 지우기 에러"));
                }
            }
        }
        user.img=`/uploads/${req.file.filename}`;

        console.log("New Image Path:  3333", user.img);


        await user.save();
        console.log("Profile image updated successfully");
        res.status(200).json({message:"Profile image updated",user:{img: `uploads/${req.file.filename}`}});
    } catch(e){
        console.error("Error updating profile image:",e);
        next(e);
    }
};