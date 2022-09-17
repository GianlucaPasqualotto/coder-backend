const fs = require("fs");

// escribir archivo

fs.writeFile("./archivo-async.txt", "primer texto", (error)=>{
    if(error){
        console.log(error)
    } else {
        console.log("El archivo se creo correctamente")
    }
})

// leer archivo

fs.readFile("./archivo-async.txt", "utf-8", (error, contenido)=>{
    if(error){
        console.log(error)
    } else {
        console.log("contenido")
    }
});

// eliminar archivo
// fs.unlink("./archivo-async.txt", (error)=>{
//     if(error){
//         console.log(error)
//     } else{
//         console.log("El archivo fue eliminado")
//     }
// })