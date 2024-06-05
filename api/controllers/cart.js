import Cart from "../models/Cart.js";
import Item from "../models/Item.js";
export const createCart = async (req,res,next) =>{
    const newCart = new Cart(req.body);

    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        next(err);
    }
};
export const updateCart = async(req,res,next) => {
    try{
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        );
        res.status(200).json(updatedCart);
    }catch(err){
        next(err);
    }
}
export const deleteCart = async(req,res,next) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted");
    }catch(err){
        next(err);
    }
};
export const getCart = async(req,res,next) => {
    try{
        console.log(req.params.id)
        const cart = await Cart.findById(req.params.id);
        res.status(200).json(cart);
    }catch(err){
        next(err);
    }
};
export const getCartItems = async(req,res,next) => {
    try{
        const cart = await Cart.findById(req.params.id);
        const list = await Promise.all(
            cart.items.map((item) => {
                return Item.findById(item);
            })
        );
        res.statue(200).json(list)
    }catch(err){
        next(err);
    }
}