import path from "path";
import User from "../models/User.js";
import fs from 'fs';
import { fileURLToPath } from "url";
import pool from "../db.js";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const updateUser = async(req,res) => {
    const {id} = req.params;
    const {email,phone} = req.body;
    try{
        const [result] = await pool.query('UPDATE users SET email=?,phone=? WHERE id=?',[email,phone,id]);
        if(result.affectedRows>0){
            res.status(200).json({id,email,phone});
         }else{
            res.status(404).json({error:"User not found"});
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
};

export const delelteUser = async(req,res) => {
    const {id} = req.params;
    try{
        const [result] = await pool.query("DELETE FROM users WHERE id=?",[id]);
        if(result.affectedRows > 0){
            res.status(200).json({message:"삭제 성공"});
        }else{
            res.status(404).json({error:"User not found"});
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
}
export const getUser = async(req,res) => {
    const {id} = req.params;

    try{
        const [rows] = await pool.query(
            `SELECT
                u.id AS id,
                u.username AS username,
                u.email AS email,
                u.phone AS phone
            FROM
                users u
            WHERE
                u.id=?`,[id]);
    if(rows.length>0){
        res.status(200).json(rows[0]);
    }else{
        res.status(404).json({error:"User not found"});
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
}
export const getUsers = async(req,res) => {
    try{
    const [rows] = await pool.query(
        `SELECT
            u.id AS id,
            u.username AS username,
            u.email AS email,
            u.phone As phone
        FROM
            users u`
    );
    res.status(200).json({rows:rows});
    }catch(error){
        res.status(400).json({error:error.message});
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