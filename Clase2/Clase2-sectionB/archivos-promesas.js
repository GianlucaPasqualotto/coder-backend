const fs = require("fs");

// leer archivo con promesas
fs.promises.readFile("./archivo.txt", "utf-8").then(contenido=>{
    return contenido
})
.then(nuevoContenido=>{
    fs.promises.writeFile("./nuevoArchivo.txt", nuevoContenido)
})
.then(segundoResultado=>{
    console.log("Copia realizada con éxito")
})