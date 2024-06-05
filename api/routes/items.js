import express from "express";
import {
    createItem,
    getItem,
    getItems,
    updateItem,
    deleteItem
} from "../controllers/item.js";
import Cart from "../models/Item.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:cartId",verifyAdmin,createItem);

router.put("/:id",verifyAdmin,updateItem);

router.delete("/:id/:cartId",verifyAdmin,deleteItem);

router.get("/:id",getItem);

router.get("/",getItems);

export default router;