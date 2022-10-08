const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req,res)=>{
    res.send("Soy una ruta de usuario")
})

module.export = userRouter;