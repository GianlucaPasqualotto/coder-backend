const multiplicar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num2 === 0){
            reject("No puedes multiplicar por cero")
        } else{
            resolve(num1*num2)
        }
    })
}


const division = (num1, divisor)=>{
    return new Promise((resolve, reject)=>{
        if (divisor === 0){
            reject("No puedes dividir por cero")
        } else{
            resolve(num1/divisor)
        }
    })
}

division(10,2).then(resultado => {
    console.log(resultado)    
    return resultado
}).then(value => {
    return multiplicar(value,100)    
}).then(resultado2=>console.log(resultado2))
.catch(error=>console.log(error))
.finally(()=>console.log("El proceso termino"))