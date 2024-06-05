import Item from "../models/Item.js";
import Cart from "../models/Cart.js";
import { createError } from "../utils/error.js";

export const createItem = async(req,res,next) =>{
    const itemId = req.params.cartid;
    const newItem = new Item(req.body);
    
    try{
        const savedItem = await newItem.save();
        try{
            await Item.findByIdAndUpdate(itemId,{
                $push: {items: savedItem._id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedItem);
    }catch(err){
        next(err);
    }
}
export const updateItem = async(req,res,next) => {
    try{
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        );
        res.status(200).json(updatedItem)
    } catch(err){
        next(err);
    }
};
export const deleteItem = async(req,res,next) => {
    const itemId = req.params.itemId;
    try{
        await Item.findByIdAndDelete(req.params.id);
        try{
            await Item.findByIdAndUpdate(itemId,{
                $pull: {items: req.params.id},
            });
        } catch(err){
            next(err);
        }
        res.status(200).json("Item has been deleted");
    }catch(err){
        next(err);
    }
};
export const getItem = async(req,res,next) => {
    try{
        const item = await Item.findById(req.params.id);
        res.status(200).json(item);
    }catch(err){
        next(err);
    }
};
export const getItems = async(req,res,next) => {
    try{
        const items = await Item.find();
        res.status(200).json(items);
    }catch(err){
        next(err);
    }
}
