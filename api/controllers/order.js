import pool from "../db.js";

export const createOrder = async(req,res) => {
    const{userId,items}=req.body;
    console.log(userId);
    try{
        const [result] = await pool.query(`INSERT INTO orders (user_id) VALUES (?)`,[userId]);
        const orderId = result.insertId;
        for(const item of items){
            const {itemId,quantity} = item;
            await pool.query(`INSERT INTO order_items (order_id, item_id,quantity) VALUES (?,?,?)`,[userId,itemId,quantity]);
        }
        await pool.query("DELETE FROM cart_items WHERE cart_id=(SELECT id FROM carts WHERE user_id=?)",[userId]);
        res.status(201).json({orderId});
    }catch(error){
        res.status(400).json({error:error.message});
    }
}
export const updateOrder = async(req,res) =>{
    const {orderId} = req.params;
    const {status} = req.body;
    try{
        const [result] = await pool.query(`UPDATE orders SET status=? WHERE id=?`,[status,orderId]);
        if(result.affectedRows>0){
            res.status(200).json({orderId,status});
        }else{
            res.status(404).json({error:"Order not found"});
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
}
export const deleteOrder = async(req,res) =>{
    const {orderId} = req.params;
    
    try{
        const [result] = await pool.query('DELETE FROM orders WHERE id=?',[orderId]);
        if(result.affectedRows>0){
            res.status(200).json({message:"삭제 완료"});
        }else{
            res.status(404).json({error:"Order not found"});
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
}
export const getAllOrder = async(req,res) => {
    try{
        const [orders] = await pool.query("SELECT * FROM orders");
        if(orders.length > 0){
            res.status(200).json({orders:orders});
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
}
export const getOrder = async(req,res) => {
    const {orderId} = req.params;
    try{
        const [orders] = await pool.query("SELECT * FROM orders WHERE id=?",[orderId]);
    if(orders.length === 0){
        res.status(404).json({error:"Order not found"});
    }else{
        res.status(200).json({orders:orders[0]})
    }
    }catch(error){
        res.status(400).json({error:error.message});
    }
}