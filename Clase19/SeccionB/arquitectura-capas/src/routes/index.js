import express from "express";
import {UserRouter} from "./api/user.routes.js";
import {ProductRouter} from "./api/product.routes.js";

const router = express.Router();

router.use("/users", UserRouter);
router.use("/products", ProductRouter);

export {router as apiRouter}; 