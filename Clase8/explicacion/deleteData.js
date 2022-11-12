import { options } from "./options/mysqlconfig.js";
import knex from "knex";

const database = knex(options);

database.from("lubricentro").where("id", 7).del()
.then(()=>console.log("Elemento eliminado"))
.catch(err=>console.log(err))
.finally(()=>database.destroy());