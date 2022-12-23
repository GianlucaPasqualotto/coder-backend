import express from "express";
import {fork} from "child_process";

const app = express();
app.listen(8080,()=>console.log("Server listening on port 8080"));

// Crear el proceso hijo
const child = fork('child.js');

let visitas = 0;

app.get("/visitas",(req,res)=>{
    res.send(`Número de visitas ${visitas++}`)
});

app.get("/calculo-bloq",(req,res)=>{
    const resultado = sumar();
    res.send(`El resultado de la suma es ${resultado}`)
});

app.get("/calculo-nobloq",(req,res)=>{
    child.on("message",(childMsg)=>{
        console.log(childMsg);
        child.send("Iniciar");
    })
    // res.send(`El resultado de la suma es ${resultado}`)
});