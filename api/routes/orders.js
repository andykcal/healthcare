import express from "express";
import {createOrder, updateOrder, deleteOrder, getOrder, getAllOrder} from "../controllers/order.js";

const router=express.Router();

router.post("/",createOrder);
router.put("/:orderId",updateOrder);
router.delete("/:orderId",deleteOrder);
router.get("/:orderId",getOrder);
router.get("/",getAllOrder);
export default router;