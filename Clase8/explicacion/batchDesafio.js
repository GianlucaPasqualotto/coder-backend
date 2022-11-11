import { options } from "./options/desafioconfig.js";
import knex from "knex";

const database = knex(options)

const productos = [
    {nombre:"aceite", codigo:"728", precio:6600.27,stock:30},
    {nombre:"cree led", codigo:"3200", precio:1045.27,stock:12},
    {nombre:"batería", codigo:"5485", precio:21000.5,stock:15},
    {nombre:"filtro aire", codigo:"88892", precio:2500.17,stock:5},
    {nombre:"filtro aceite", codigo:"8721", precio:1801.27,stock:10},];

const operationsDb = async()=>{
    //validamos si la tabla ya existe en la base de datos
    const tableExists = await database.schema.hasTable("articulos");
    if(tableExists){
        await database.schema.dropTable("articulos");
    }
    await database.schema.createTable("articulos",table=>{
        table.increments("id"),
        table.string("Nombre",30).nullable(false);
        table.string("Codigo",15).nullable(false);
        table.float("Precio");
        table.integer("Stock");
    });
    
    // Insertar articulos
    await database('articulos').insert(productos);

    // Listar la tabla mostrando los resultados por consola
    const result = await database("articulos").select("*");
    const products = result.map(elm=>({...elm}));
    console.log(products)
    
    // Borrar un articulo
    await database("articulos").where("id",5).del();
    
    
    database.destroy();    

}

operationsDb();