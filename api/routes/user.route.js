import express from "express";
import { testApi } from "../controllers/user.controller.js";
import { signup, login } from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/", testApi);
router.post("/signup", signup);
router.post("/login", login);
export default router;
