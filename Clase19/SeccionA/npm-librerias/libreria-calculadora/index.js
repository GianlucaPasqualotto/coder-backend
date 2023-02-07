const sumar = (num1,num2)=>{
    const suma = (num1+num2);
    return `La sumar de ${num1} y ${num2} es igual a ${suma}`
};

const restar = (num1,num2)=>{
    const resta = (num1-num2);
    return `La resta de ${num1} y ${num2} es igual a ${resta}`
};

const dividir = (num1,num2)=>{
    const resultado = (num1/num2);
    return `El resultado de dividir ${num1} y ${num2} es igual a ${resultado}`
};


export {sumar,restar,dividir};