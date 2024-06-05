import express from "express"
import {login,register,logout,createcart,FindId} from "../controllers/auth.js";

const router = express.Router();;

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.post("/createcart",createcart);
router.post("/findid",FindId);
export default router;