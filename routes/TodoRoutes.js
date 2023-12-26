import express from "express";
const router = express.Router();

import {
  createTodo,
  deleteTodo,
  getTodo,
} from "../controllers/TodoController.js";

router.get("/", getTodo);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);

export default router;
