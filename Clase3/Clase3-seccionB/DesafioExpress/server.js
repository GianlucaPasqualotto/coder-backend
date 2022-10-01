const express = require("express");

// Crear el servidor con Express
const app = express();

// Configurar las rutas 
app.get("/", (request, response)=>{
    response.send("<h1 style='color:blue'>Bienvenidos al servidor Express</h1>")
})

let visitas = 0;
app.get("/visitas", (req, res)=>{
    visitas++;
    res.send(`La cantidad de visitas es ${visitas}`)
})

app.get("/gianluca", (req,res)=>{
    res.send("Hola Gian")
})

// Levantar el servidor
app.listen(8080,()=>{
    console.log("Server listening on port 8080")
})