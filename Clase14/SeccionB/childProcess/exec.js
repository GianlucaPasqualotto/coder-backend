import {exec} from "child_process";

// Generar proceso hijo
exec("ls",(error,stddout,stderr)=>{
    if(error){
        console.log(error)
    }
    if(stderr){
        console.log(stderr)
    }
    console.log("Salida del proceso hijo",stddout)
})