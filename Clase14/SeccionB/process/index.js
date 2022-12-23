console.log(process.memoryUsage());

process.on("exit",()=>console.log("Proceso terminado"));

process.on("uncaughtException",(error)=>{
    console.log(error)
})

console.log(1);
console.log(2);
console.log(3);

llamarFuncionQueNoExiste();

// process.exit();

console.log(4);
console.log(5);
console.log(6);