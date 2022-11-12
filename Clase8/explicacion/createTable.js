import { options } from "./options/mysqlconfig.js";
import knex from "knex";

// creamos la instancia de la base de datos
const database = knex(options);

// CREATE TABLE nombreTabla
database.schema.createTable("lubricentro", table=>{
    table.increments("id"); // id AUTO INCREMENT NOT NULL PRIMARY KEY
    table.string("name", 30); // name VARCHAR(30)
    table.integer("price"); // price INT
}).then(()=>console.log("table created"))
.catch(err=>console.log(err))
.finally(()=>database.destroy()); // cerrar la sesión