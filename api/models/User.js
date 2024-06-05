import mongoose  from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        phone:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required: true,
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
        img:{
            type:String
        },
        product:{
            type:String
        }
    },
    {timestamps:true}
);
export default mongoose.model("User",userSchema);