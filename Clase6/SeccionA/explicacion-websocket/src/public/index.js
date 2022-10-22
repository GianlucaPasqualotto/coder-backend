console.log("Soy un archivo Js")

// inicializar websocket del lado del frontend
const socketCliente = io();

// recibir el mensaje desde el servidor
socketCliente.on("messageFromServer",(data)=>{
    console.log(data)
})

const messageField = document.getElementById("messageField");
messageField.addEventListener("keydown",(evt)=>{
    socketCliente.emit("letras",evt.key);
    socketCliente.on("messages", (mensajes)=>{
        console.log(mensajes);
    })
})
