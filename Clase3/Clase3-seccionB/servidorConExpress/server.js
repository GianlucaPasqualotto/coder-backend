const express = require("express");

// Crear el servidor con Express
const app = express();

// Configurar las rutas 
app.get("/", (request, response)=>{
    response.send("Hola desde Express")
})

app.get("/otra-ruta", (request, response)=>{
    response.send("Esta es otra ruta con Express")
})

// Levantar el servidor
app.listen(8080,()=>{
    console.log("Server listening on port 8080")
})