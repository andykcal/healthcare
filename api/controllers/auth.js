import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import pool from "../db.js";

export const register = async (req,res) => {

        const {username,email,phone,password}=req.body;
        console.log(`register:${username},${email},${password},${phone}`);
        try{
            const hashedPassword = await bcrypt.hash(password,10);
            const [result] = await pool.query("INSERT INTO users (username,email,phone,password) VALUES (?,?,?,?)",[username,email,phone,hashedPassword]);
            res.status(200).json({success:true,message:"User has been created"});
        }catch(error){
            res.status(400).json({error:error.message});
        }
}
//로그인
export const login = async(req,res) => {
    const {username,email,phone,password}=req.body;
    console.log("req.body",req.body);
    try{
        const [rows] = await pool.query("SELECT * FROM users WHERE username=?",[username]);
        if(rows.length===0){
            return res.status(404).json({error:"User not found"});
        }
        const user = rows[0];
        console.log(user);
        const isMatch = await bcrypt.compare(req.body.password,user.password);
        console.log(isMatch);
        if(!isMatch){
            return res.status(400).json({error: "Invalid credentials"});
        }

        console.log("user.isAdmin",user.isAdmin);
        const token = jwt.sign({id:user.id, isAdmin: user.isAdmin},process.env.JWT,{expiresIn:'1h'});
        const {password,isAdmin, ...otherDetails} = user;
        res
            .cookie("access_token",token,{
                    httpOnly:true,
                    sameSite:'strict',
                    path: "/",
            })
            .status(200)
            .json({
                details:{...otherDetails,token},
                isAdmin
            });
    }catch(error){
        res.status(500).json({error:error.message});
    }
}
export const logout = (req,res) => {
    res.clearCookie("access_token",{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        path:"/",
        sameSite: "strict",
    })
    .status(200)
    .json({message:"Logged out successfully"})
};
export const FindId = async(req,res,next) => {
    try{
        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404,"User not found"));

        const isEmailCorrect = await bcrypt.compare(
            req.body.email,
            user.email
        );
        if(!isEmailCorrect)
            return next(createError(400,"Wrong Id or email"));

        const token = jwt.sign(
            {id: user._id,isAdmin: user.isAdmin},
            process.env.JWT
        );
        const {password,isAdmin,...otherDetails} = user._doc;
        res
            .cookie("access_token",token, {
                httpOnly: true,
                sameSite:'strict',
                path:"/"
            })
            .status(200)
            .json({details:{...otherDetails},isAdmin});
    }catch(err){
        next(err);
    }
}