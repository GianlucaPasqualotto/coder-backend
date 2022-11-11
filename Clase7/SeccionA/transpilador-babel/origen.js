class User{
    constructor(name,lastname){
        this.name = name;
        this.lastname= lastname;
    }
    getName(){
        return`${this.name} ${this.lastname}`
    }
}
const usuario1 = new User("Gianluca", "Pasqualotto");