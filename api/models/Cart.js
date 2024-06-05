import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    items:{
        type:[String],
    },
    featured:{
        type:Boolean,
        default:false,
    },
});
export default mongoose.model("Cart",CartSchema);
