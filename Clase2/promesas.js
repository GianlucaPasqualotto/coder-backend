// const division = (dividendo, divisor) => {

// }

let promesa = new Promise((resolve, reject)=>{
    let condition = false;
    if (condition === true){
        resolve("Operación completada con éxito")
    } else {
        reject("Hubo un fallo en el servidor")
    }
})

promesa.then((resultado)=>console.log(resultado))
.catch(error=>console.log(error))