import express from "express";
import * as UserController from "../../controllers/user.controller.js";

const router = express.Router();

// GET http://localhost:8080/api/users/
router.get("/", UserController.getUsersController);
router.post("/", UserController.saveUsersController);

export {router as UserRouter};