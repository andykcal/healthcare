import express from "express"
import {login,register,logout,FindId} from "../controllers/auth.js";

const router = express.Router();;

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.post("/findid",FindId);
export default router;