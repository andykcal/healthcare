import express from "express";
import {
    createCart,
    getCart,
    updateCart,
    deleteCart
} from "../controllers/cart.js";
import { verifyAdmin,verifyCart,verifyUser,verifyTokenNext } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:userId/items",verifyTokenNext,createCart);

router.put("/:userId",verifyTokenNext,updateCart);

router.delete("/:userId/items/:itemId",verifyTokenNext,deleteCart);

router.get("/:userId",getCart);

export default router;