import express from "express";
import cluster from "cluster"
import os from "os"; // Extrar información del sistema operativo

const app = express();
const PORT = 8080;

const numeroCPUs = os.cpus().length; // Númerode núcleos del procesador de la computadora
// console.log(numeroCPUs)

// Lógica de creación del cluster
// if(cluster.isPrimary){
//     // Crear los subprocesos del cluster
//     for (let i=0;i<numeroCPUs;i++){
//         cluster.fork(); // Crear nuevo subproceso por cada núcleo del cpu
//     }
//     cluster.on("exit",(worker,error)=>{
//         // Detectamos que algun subproceso falla
//         console.log(`El subproceso ${worker.process.pid} dejo de funcionar`);
//         cluster.fork(); // Creamos un nuevo subproceso que reemplaza al que fallo
//     });
// } else {
    app.listen(PORT,()=>console.log(`Server listening on port ${PORT} on process ${process.pid}`));
// }

app.get("/",(req,res)=>{
    res.send(`Respuesta desde port ${PORT} en el proceso ${process.pid}`);
    // cluster.worker.kill(); // Simulación de matar al proceso
})

