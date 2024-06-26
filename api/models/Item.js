import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    featured:{
        type:Boolean,
        default:false,
    },
});
export default mongoose.model("Item",ItemSchema);
