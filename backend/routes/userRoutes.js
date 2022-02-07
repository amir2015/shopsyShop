import express from "express";
const router = express.Router();
import {
  authUser,
  getUSerProfile,
  registertUSer,
  updateUserProfile,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleWare/authMiddleware.js";

router.route("/").post(registertUSer).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUSerProfile)
  .put(protect, updateUserProfile);
router.route("/:id").delete(protect, admin, deleteUser);

export default router;
