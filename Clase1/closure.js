const ahorrosBanco = () => {
    let ahorros = 0;
    return function (abono){
        ahorros = ahorros + abono;
        console.log(ahorros)
    }
    
}

let ahorrosEnzo = ahorrosBanco();
let ahorrosValentina = ahorrosBanco();
console.log(ahorrosEnzo)
console.log(ahorrosValentina)

ahorrosEnzo(500);
ahorrosValentina(1000);