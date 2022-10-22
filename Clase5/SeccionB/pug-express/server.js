const express = require("express");
const app = express();
app.listen(8080,()=>console.log("Server runnig"));

//configuración de pug
app.set("views", "./views");
app.set("view engine", "pug");

//routes
// /home?edad=20
app.get("/home",(req,res)=>{
    const {edad} = req.query;
    res.render("home",{
        nombre:"Gianluca",
        edad: edad
    })
})