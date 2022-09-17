let i = 0;
const intervalor = setInterval(() => {
    console.log("Ya paso 1 segundo", i)
    i++;
    if (i === 10){
        clearInterval(intervalor)
    }
}, 1000);