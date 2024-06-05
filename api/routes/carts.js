import express from "express";
import {
    createCart,
    getCart,
    getCartItems,
    updateCart,
    deleteCart
} from "../controllers/cart.js";
import Cart from "../models/Cart.js";
import { verifyAdmin,verifyCart } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/",verifyCart,createCart);

router.put("/:id",verifyCart,updateCart);

router.delete("/:id",verifyCart,deleteCart);

router.get("/:id",getCart);

router.get("/item/:id",getCartItems);

export default router;