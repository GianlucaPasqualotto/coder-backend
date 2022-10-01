const fs = require("fs");

class Contenedor{
    constructor(nameFile){
        this.nameFile = nameFile;
    }

    save = async(product)=>{
        try {
            //leer el archivo existe
            if(fs.existsSync(this.nameFile)){
                const contenido = await fs.promises.readFile(this.nameFile,"utf8");
                if(contenido){
                    const productos = JSON.parse(contenido);
                    const lastIdAdded = productos.reduce((acc,item)=>item.id > acc ? acc = item.id : acc, 0);
                    const newProduct={
                        id: lastIdAdded+1,
                        ...product
                    }
                    productos.push(newProduct);
                    await fs.promises.writeFile(this.nameFile, JSON.stringify(productos, null, 2))
                } else{
                    //si no existe ningun contenido en el archivo
                    const newProduct={
                        id:1,
                        ...product
                    }
                    //creamos el archivo
                    await fs.promises.writeFile(this.nameFile, JSON.stringify([newProduct], null, 2));
                }
            } else{
                // si el archivo no existe
                const newProduct={
                    id:1,
                    ...product
                }
                //creamos el archivo
                await fs.promises.writeFile(this.nameFile, JSON.stringify([newProduct], null, 2));
            }
        } catch (error) {
            console.log(error);
        }
    }

    getById = async(id)=>{
        try {
            if(fs.existsSync(this.nameFile)){
                const contenido = await fs.promises.readFile(this.nameFile,"utf8");
                if(contenido){
                    const productos = JSON.parse(contenido);
                    const producto = productos.find(item=>item.id===id);
                    return producto
                } else{
                    return "El archivo esta vacio"
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    getAll = async()=>{
        try {
            const contenido = await fs.promises.readFile(this.nameFile,"utf8");
            const productos = JSON.parse(contenido);
            return productos
        } catch (error) {
            console.log(error)
        }
    }

    deleteById = async(id)=>{
        try {
            const contenido = await fs.promises.readFile(this.nameFile,"utf8");
            const productos = JSON.parse(contenido);
            const newProducts = productos.filter(item=>item.id!==id);
            await fs.promises.writeFile(this.nameFile, JSON.stringify(newProducts, null, 2));
        } catch (error) {
            console.log(error)
        }
    }

    deleteAll = async()=>{
        try {
            await fs.promises.writeFile(this.nameFile, JSON.stringify([]));
        } catch (error) {
            console.log(error)
        }
    }
}

const listaProductos = new Contenedor("./productos.txt")
const producto1 = {
    title:"Aceite Castrol",
    price:6300,
    thumbnail:"https://http2.mlstatic.com/D_NQ_NP_700867-MLA48777649562_012022-O.webp"
}
const productoRepetido = {
    title:"Aceite Castrol",
    price:6300,
    thumbnail:"https://http2.mlstatic.com/D_NQ_NP_700867-MLA48777649562_012022-O.webp"
}
const producto2 = {
    title:"Aceite Motul",
    price:8300,
    thumbnail:"https://http2.mlstatic.com/D_NQ_NP_190305-MLA20860556857_082016-O.webp"
}

const producto3 = {
    title:"Aceite Mobil",
    price:7300,
    thumbnail:"https://http2.mlstatic.com/D_NQ_NP_995600-MLA49805367577_042022-O.webp"
}

const crearProducto = async()=>{
    await listaProductos.save(producto1);
    await listaProductos.save(producto2);
    await listaProductos.save(producto3);
    const resultadoId = await listaProductos.getById(1);
    console.log(resultadoId)
    const productos = await listaProductos.getAll();
    console.log(productos)
    await listaProductos.deleteById(2);
    await listaProductos.save(producto2);
    // await listaProductos.deleteAll();
}

crearProducto();