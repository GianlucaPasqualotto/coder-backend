const http = require("http");

// Crear servidor usando modulo http

const server = http.createServer((request, response)=>{
    const currentDate = new Date();
    const hours = currentDate.getHours();
    console.log(hours)
    if (hours>6&& hours<12){
        response.end("Buenos días")
    } else if (hours>12 && hours<20){
        response.end("Buenas tardes")
    } else {
        response.end("Buenas noches")
    }
})

// levantar o ejecutar el servidor 
server.listen(8080, ()=>{
    console.log("Server listening on port 8080")
})