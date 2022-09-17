const fs = require("fs");

//crear un archivo
fs.writeFileSync(".//..//archivo.txt", "primer texto")


// leer archivo
const contenido = fs.readFileSync("./archivo.txt", "utf-8")
console.log(contenido);

// agregar contenido
fs.appendFileSync("./archivo.txt", "info adicional")

// elimiar archivo
fs.unlinkSync("./archivo.txt")

