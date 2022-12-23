process.stdout.write("Hola mundo \n");

process.stdout.write("Hola consola \n");

process.stdin.on("data",(datos)=>{
    console.log(`Bienvenido ${datos.toString()}`);
});