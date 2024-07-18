import pool from "../db.js";

export const createItem = async(req,res) =>{
    const {name,old_price,new_price,description,img}=req.body;
    // console.log(name,old_price,new_price,description);
    try{
        const [result]=await pool.query("INSERT INTO items (name,old_price,new_price,description,img) VALUES (?,?,?,?,?)",[name,old_price,new_price,description,img]);
        res.status(201).json({name,old_price,new_price,description,img});
    }catch(error){
        res.status(400).json({error:error.message});
    }
};
export const updateItem = async(req,res) => {
    const {id} = req.params;
    const {name,new_price,old_price,description,img} = req.body;
    try{
        const [result] = await pool.query("UPDATE items SET name=?,old_price=?,new_price=?,description=?,img=? WHERE id=?",[name,old_price,new_price,description,img,id]);
        res.status(201).json({name,old_price,new_price,description,img});
    }catch(error){
        res.status(400).json({error:error.message});
    }
};
export const deleteItem = async(req,res) => {
    const {id} = req.params;
    try{
        const [result] = await pool.query("DELETE FROM items WHERE id=?",[id]);
        res.status(200).json({message:"삭제 성공"});
    }catch(error){
        res.status(400).json({error:error.message});
    }
};
export const getItem = async(req,res) => {
    const{id}=req.params;
    try{
        const[rows]=await pool.query(
            `SELECT i.id AS id,
            i.name AS name,
            i.old_price AS old_price,
            i.new_price AS new_price, 
            i.description AS description
            FROM items i
            p.id AS picture_id,
            p.url AS picture,
            p.created_at AS picture_created_at
            p.updated_at As pictuer_updated_at
        FROM
            items i
        LEFT JOIN 
            pictures p on i.id = p.item_id
            WHERE i.id=?`,[id]);
        if(rows.length>0){
            res.status(200).json(rows[0]);
        }
        else{
            res.status(401).json({error:"Item not found"})
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
};
export const getItems = async(req,res) => {
    const{id}=req.params;
    try{
        const[rows]=await pool.query(
            `SELECT i.id AS id,
            i.name AS name,
            i.old_price AS old_price,
            i.new_price AS new_price, 
            i.description AS description
            FROM items i`);
        res.status(200).json({rows:rows});
    }catch(error){
        res.status(400).json({error:error.message});
    }
};