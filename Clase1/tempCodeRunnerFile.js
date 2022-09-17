class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

// Funcion que retorna el nombre completo del usuario
getFullName() {
    return `El nombre completo es: ${this.name} ${this.apellido}`;
}