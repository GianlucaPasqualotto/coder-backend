import { options } from "./options/mysqlconfig.js";
import knex from "knex";

const database = knex(options);

// Select completo de la tabla
// SELECT * FROM lubricentro;
// database.from('lubricentro').select("*")
// .then((result)=>{
//     const aceite = result.map(elm=>({...elm}));
//     console.log(aceite)
// })
// .catch(err=>console.log(err))
// .finally(()=>database.destroy());

// Select con filtro (where)
// SELECT * FROM lubricentro WHERE price >2000;
database.from('lubricentro').select("*").where("price", ">", 6000)
.then((result)=>{
    const aceite = result.map(elm=>({...elm}));
    console.log(aceite)
})
.catch(err=>console.log(err))
.finally(()=>database.destroy());