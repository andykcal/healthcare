import pool from "../db.js";

export const createPayment = async(req,res) =>{
    const {orderId,amount,paymentMethod} = req.body;
    try{
        const [result] = await pool.query("INSERT INTO payments (order_id, amount, payment_method_id) VALUES (?,?,?)",[orderId,amount,paymentMethod]);
        res.status(201).json({orderId});
    }catch(error){
        res.status(400).json({error:error.message});
    }
};

export const updatePayment = async(req,res) =>{
    const {paymentId}=req.params;
    const {amount}=req.body;
    try{
    const[result]= await pool.query("UPDATE payments SET amount=? WHERE id=?",[amount,paymentId]);
    if(result.affectedRows>0){
        res.status(201).json({paymentId,amount})
    }else{
        res.status(404).json({error:"Payment not found"});
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
}
export const getPayment = async(req,res) =>{
    const {paymentId}=req.params;
    
    try{
        const[result] = await pool.query("SELECT * FROM payments WHERE id=?",[paymentId]);
        if(result.length>0){
            res.status(201).json({result});
        }else{
            res.status(404).json({error:"Payment not found"});
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
}