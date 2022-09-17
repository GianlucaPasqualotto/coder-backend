class Contador{
    constructor(nombre){
        this.nombre = nombre;
        this.contador = 0;
    }
    static ContadorGlobal = 0;
}

const contadorGian = new Contador("Gian");
console.log("Gian", contadorGian);