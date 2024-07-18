import express from "express";
import {
    createItem,
    getItem,
    getItems,
    updateItem,
    deleteItem
} from "../controllers/item.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/",createItem);

router.put("/:id",verifyAdmin,updateItem);

router.delete("/:id",verifyAdmin,deleteItem);

router.get("/:id",getItem);

router.get("/",getItems);

export default router;