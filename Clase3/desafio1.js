const numeros = [];
const resultados = {};
for (let index = 0; index < 10000; index ++) {
    const numeroAleatorio = parseInt(Math.random()*20+1);
    if (resultados[numeroAleatorio]){
        resultados[numeroAleatorio]++
    } else {
        resultados[numeroAleatorio] = 1;
    }
}

console.log(resultados)
