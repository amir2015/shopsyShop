import express from "express";
const router = express.Router();
import {
  authUser,
  getUSerProfile,
  registertUSer,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleWare/authMiddleware.js";

router.route("/").post(registertUSer);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUSerProfile)
  .put(protect, updateUserProfile);

export default router;
