import { options } from "./options/mysqlconfig.js";
import knex from "knex";

const database = knex(options);

const aceites = [
    {name:"Castrol", price:5600},
    {name:"Mobil", price:6600},
    {name:"Valvoline", price:7600},
    {name:"Total", price:8600},
    {name:"Petronas", price:9600},
]

// INSERT 
// insertar un arreglo a la tabla 'lubricentro'
database('lubricentro').insert(aceites)
.then(()=>console.log("Productos agregados"))
.catch(err=>console.log(err))
.finally(()=>database.destroy());