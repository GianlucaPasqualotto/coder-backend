console.log("Inicio programa")
setTimeout(() => {
    console.log("Ya pasaron 5 segundos")
}, 5000);
console.log("Fin programa")

let i = 0;
const intervalor = setInterval(() => {
    console.log("Ya paso 1 segundo", i)
    i++;
    if (i === 10){
        clearInterval(intervalor)
    }
}, 1000);