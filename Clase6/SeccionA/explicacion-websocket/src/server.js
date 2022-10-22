const express = require("express");
const {Server} = require("socket.io");

const app = express();

// genera el servidor de nuestra aplicacion y lo pone a funcionar en un puerto
const server = app.listen(8080,()=>console.log("Listening port 8080"));

// io: servidor del websocket
const io = new Server(server) // conectamos con el servidor principal

app.use(express.static(__dirname+"/public"));

// crear conexion socket del cliente con el socket del servidor
io.on("connection",(socket)=>{
    console.log("Nuevo socket o cliente conectado",socket.id);
    // enviar informacion del lado del servidor al cliente
    socket.emit("messageFromServer","Se ha conectado exitosamente");
    socket.on("letras",(dataDelCliente)=>{
        console.log(dataDelCliente)
        //emitir informacion para todos los sockets o clientes conectados
        io.sockets.emit("messages", dataDelCliente);
    })
})