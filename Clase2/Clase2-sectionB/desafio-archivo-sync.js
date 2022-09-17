const fs = require("fs");

    const fecha = new Date().toLocaleDateString();
    console.log(fecha)

fs.writeFileSync("./fyh.txt", fecha);
const contenido = fs.readFileSync("./fyh.txt", "utf-8")
console.log(contenido)