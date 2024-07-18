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
       const {userId,itemId} =req.params;
       const {quantity} = req.body;
       try{
        const [cart] = await pool.query(`SELECT * FROM carts WHERE id=?`,[userId]);
        if(cart.length>0){
            const cartId = cart[0].id;
            const [result] = await pool.query(`UPDATE cart_items SET quantity=? WHERE cart_id=? AND id=?`,[quantity,cartId,userId])
            res.status(200).json({quantity,cartId,userId});
            if(result.affectedRows>0){
                res.status(200).json({id:itemId,card_id:cartId,quantity});
            }else{
                res.status(404).json({error:"item not found"});
            }
        }else{
            res.status(404).json({error:"Cart not found"});
        }
}catch(error){
    res.status(400).json({error:error.message});
    }
}
export const deleteCart = async(req,res,next) => {
    const {userId,itemId}=req.params;
    console.log("userId",userId);
    console.log("itemId",itemId);
    try{
        const [cart] = await pool.query(`SELECT * FROM carts WHERE id=?`,[userId]);
        if(cart.length>0){
            const cartId=cart[0].id;
            const [result] = await pool.query(`DELETE FROM cart_items WHERE cart_id=? AND id=?`,[cartId,itemId]);
            if(result.affectedRows>0){
                res.status(200).json({message:"삭제 완료"});
            }else{
                res.status(404).json({error:"Item not found"});
            }
        }else{
            res.status(400).json({error:error.message});
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
};
export const getCart = async(req,res,next) => {
    const {userId} = req.params;
    console.log("userId",userId);
    try{
        const [cart] = await pool.query("SELECT * FROM carts WHERE user_id=?",[userId])
        if(cart.length>0){
        res.status(200).json({cart});
        }else{
            res.status(404).json({error:"Cart not found"});
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
};