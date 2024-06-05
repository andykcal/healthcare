import User from "../models/User.js";
import Cart from "../models/Cart.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const register = async (req,res,next) => {
    
  try{  
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
    const newUser = new User({
        ...req.body,
        password: hash,
    });
    
    await newUser.save();
    res.status(200).send("User has been created");
    }catch(err){
        next(err);
    }
}
export const login = async(req,res,next) => {
    try{
        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404,"User not found"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if(!isPasswordCorrect)
            return next(createError(400,"Wrong password or username"));

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
export const logout = (req,res) => {
    res
    .clearCookie("access_token",{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        path:"/",
        sameSite: "strict",
    })
    .status(200)
    .json({message:"Logged out successfully"})
};

export const createcart = async (req,res,next) => {
    
    try{  
      const salt = bcrypt.genSaltSync(10);
      const newCart = new Cart({
          ...req.body,
      });
      
      await newCart.save();
      res.status(200).send("Cart has been created");
      }catch(err){
          next(err);
      }
  }
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