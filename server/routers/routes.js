import express from "express";
import { addUsers, getUsers } from "../controllers/users.js";

const router = express.Router();

// post
router.post("/users", addUsers);

// get
router.get("/users/all", getUsers);

export default router;
