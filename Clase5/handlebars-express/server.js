const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

console.log(__dirname)
const folderViews = path.join(__dirname, "views");
console.log(folderViews); 

const app = express();
app.listen(8080,()=>console.log("Server ready 8080"));

// configurar motor de plantillas
// 1- definir el motor de plantillas
app.engine("handlebars",handlebars.engine());
// 2- ubicar la carpeta donde coloco los templates de ext. handlebars
app.set("views","./views");
// 3- definir el motor para express
app.set("view engine", "handlebars");


// rutas 
app.get("/",(req,res)=>{
    res.render("home",{
            nombre: 'Gianluca',
            apellido: 'Pasqualotto',
            edad: 26,
            email: 'pasqualottogianluca@gnail.com',
            telefono: '261671923'
    })
})

app.get("/contacto",(req,res)=>{
    res.render("contact")
})

app.get("/usuarios",(req,res)=>{
    res.render("usuarios",{
        estudiantes:[
            {name:"Pedro"},
            {name:"María"},
            {name:"Carlos"}
        ]
    })
})