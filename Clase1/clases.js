class Perro{
    constructor(name, age, raza){
        this.name = name;
        this.age = age;
        this.raza = raza;
    }
}

const perroNala = new Perro("Nala", 4, "caniche");
console.log(perroNala);

const perroKira = new Perro("Kira", 3, "boxer");
console.log(perroKira);