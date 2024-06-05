import express from "express";
import{
    updateUser,
    delelteUser,
    getUser,
    getUsers,
    updateProfileImage
} from "../controllers/user.js";
import { verifyAdmin,verifyToken,verifyUser } from "../utils/verifyToken.js";
import upload from "../utils/upload.js";
const router = express.Router();
router.put("/:id",verifyUser,updateUser);
router.delete("/:id",verifyUser,delelteUser);
router.get("/:id",verifyUser,getUser);
router.get("/",verifyAdmin,getUsers);
router.put("/:id/profile-image", verifyUser, upload.single('file'), updateProfileImage);
export default router;