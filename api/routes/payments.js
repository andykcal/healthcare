import express, { Router } from "express";
import {createPayment, updatePayment, getPayment} from "../controllers/payment.js";

const router = express.Router();

router.post("/",createPayment);
router.put("/:paymentId",updatePayment);
router.get("/:paymentId",getPayment);

export default router;