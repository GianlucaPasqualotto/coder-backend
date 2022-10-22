const express = require("express");
const handlebars = require("express-handlebars");
const {Server: HttpServer} = require("http");
const {Server: Socket} = require("socket.io");
const {router, productos, mensajes} = require("./router/ruta.js");
const fs = require("fs");

const app = express();
const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 8080

const server = httpServer.listen(PORT,()=>console.log(`Server in ${PORT}`))

app.use(express.static("views"))

app.engine("handlebars", handlebars.engine())

app.set("views", "./views")

app.set("view engine", "handlebars")

app.use("/", router);

io.on("connection", (socket)=>{
    console.log("Nuevo usuario", socket.id)
    io.socket.emit("productos", productos);
    io.socket.emit("mensajes", mensajes);

    socket.broadcast.emit("nuevoUsuario")
    socket.on("nuevoProducto", nuevoProducto=>{
        productos.push(nuevoProducto)
        fs.writeFileSync("./archivo.txt", JSON.stringify(productos))
        io.sockets.emit("lista", productos)
    })
    socket.on("nuevoMensaje", nuevoMensaje=>{
        console.log(nuevoMensaje);
        mensajes.push(nuevoMensaje);
        fs.writeFileSync("./mensajes.txt", JSON.stringify(mensajes))
        io.sockets.emit("chat", mensajes)
    })
})
