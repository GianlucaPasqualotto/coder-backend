const http = require("http");

// Crear servidor usando modulo http

const server = http.createServer((request, response)=>{
    console.log("El cliente solicito algo")
    response.end("Hola desde el servidor http. Recibimos tu solicitud")
})

// levantar o ejecutar el servidor 
server.listen(8080, ()=>{
    console.log("Server listening on port 8080")
})