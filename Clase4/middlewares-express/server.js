const express = require("express");
const app = express();
const PORT =8081;
app.listen(PORT,()=>console.log("Server running"));

app.use(express.json());

app.use((req,res,next)=>{
    console.log("Procesando antes de la petición");
    next();
})

const verificarRol = (req,res,next)=>{
    const rol = "admin";
    if(rol == "admin"){
        next();
    } else {
        res.send("No tienen los permisos necesarios")
    }
}

//routes
app.get("/",(req,res)=>{
    console.log("Ejecutando Ruta /")
    res.send("Petición recibida")
})

app.get("/home",(req,res)=>{
    console.log("Ejecutando Ruta /home")
    res.send("Petición recibida en ruta home")
})

app.get("/users",verificarRol,(req,res)=>{
    res.send("Lista de usuarios");
})