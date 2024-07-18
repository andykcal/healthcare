import Cart from "../models/Cart.js";
import Item from "../models/Item.js";
import pool from "../db.js";
export const createCart = async (req,res) =>{
    const {userId}=req.params;
    const {itemId,quantity}=req.body;

    console.log("req.body:",req.body);
    console.log("userId",userId);
    try{
        const [cart] = await pool.query("SELECT * FROM carts WHERE user_id=?",[userId]);
        let cartId;
        if(cart.length>0){
            cartId=cart[0].id;
            console.log("cartId",cartId);
        }else{
            const [result] = await pool.query(`INSERT INTO carts (user_id) VALUES (?)`,[userId]);
            cartId=result.insertId;
            console.log("cartId2",cartId);
        }
        const [result] = await pool.query(`INSERT INTO cart_items (cart_id,item_id,quantity) VALUES (?,?,?)`,[cartId,itemId,quantity]);
        res.status(200).json({itemId,quantity});
    }catch(error){
        res.status(400).json({error:error.message});
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
    }catch(error){
        res.status(400).json({error:error.message});
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