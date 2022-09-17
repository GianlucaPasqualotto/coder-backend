const sumar = (num1, num2) => num1+num2;
const multiplicar = (num1, num2) => num1*num2;

const funcionPrincipal = (numero1, numero2, callback)=>{
    return callback(numero1, numero2)
}

console.log(funcionPrincipal(2,4,sumar));
console.log(funcionPrincipal(2,4,multiplicar));

//callback para procesos pesados o complejos
const notificacion = () => "El proceso ya termino"; 

const funcionClompleja = (callback)=> {
    //ejecutando muchas operaciones
    setTimeout(() => {
        return callback();
    }, 5000);
}
console.log(funcionClompleja(notificacion));
console.log("otro codigo");