import {spawn} from "child_process";

// exec("find /",(error,stddout,stderr)=>{
//     if(error){
//         console.log(error)
//     }
//     if(stderr){
//         console.log(stderr)
//     }
//     console.log("Salida del proceso hijo",stddout)
// });

// console.log(1)

const child = spawn("find", ["/"]);
child.stdout.on("data",(datos)=>{
    console.log(datos.toString())
})