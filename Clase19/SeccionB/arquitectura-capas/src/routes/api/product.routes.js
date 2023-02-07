import express from "express";
const router = express.Router();

// GET http://localhost:8080/api/product/all 
router.get("/all", (req,res)=>{
    res.send("Todos los productos")
})

export {router as ProductRouter};