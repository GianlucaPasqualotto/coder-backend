const sumar = ()=>{
    let suma = 0;
    for(let i =0;i<10e9;i++){
        suma+=i
    };
    return suma;
}

process.send("Listo"); // Le decimos al proceso padre que el proceso hijo esta listo para usarse

process.on("message",(parentMsg)=>{
    if(parentMsg === "Iniciar"){
        console.log("Iniciar operacion en el proceso hijo");
        const resultado = sumar();
        process.send(resultado);
    }
})