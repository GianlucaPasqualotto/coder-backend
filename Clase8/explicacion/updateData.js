import { options } from "./options/mysqlconfig.js";
import knex from "knex";

const database = knex(options);

database.from("lubricentro").where("id", 5).update({price:10600})
.then(()=>console.log("Cambio cargado"))
.catch(err=>console.log(err))
.finally(()=>database.destroy());