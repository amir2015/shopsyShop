import express from "express";
const router = express.Router();
import {
  authUser,
  getUSerProfile,
  registertUSer,
  updateUserProfile,
  getUsers,
} from "../controllers/userController.js";
import { protect, admin } from "../middleWare/authMiddleware.js";

router.route("/").post(registertUSer).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUSerProfile)
  .put(protect, updateUserProfile);

export default router;
