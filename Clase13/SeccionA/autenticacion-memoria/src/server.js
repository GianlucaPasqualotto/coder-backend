// Importaciones
import express from "express";
import session from "express-session";
import handlebars from "express-handlebars";
import { dirname } from "path";
import {fileURLToPath} from "url";


// Servidor express
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`));


// Archivos estaticos
const __dirname = dirname(fileURLToPath(import.meta.url)); //ruta server.js
app.use(express.static(__dirname+"/public"));//ruta carpeta public


// Motor de plantilla
// Inicializar el motor de plantillas
app.engine(".hbs",handlebars.engine({extname: '.hbs'}));
// Ruta de las vistas
app.set("views", __dirname+"/views");
// Vinculacion del motor a express
app.set("view engine", ".hbs");


// Interpretacion de formato json desde el cliente
app.use(express.json()); // Lectura de json desde el cuerpo de la peticion.
app.use(express.urlencoded({extended:true})); // Lectura de json desde un metodo post de formulario


// Configuracion de la sesion
app.use(session({
    secret:"claveSecreta", // Clave de encriptacion de la sesion

    // Configuracion para guardar en la memoria del servidor
    resave:true,
    saveUninitialized:true,
}));


// Middleware para validar la sesion del usuario
const checkSession = (req,res,next)=>{
    // Validamos si la sesion esta activa
    if(req.session.user){
        res.redirect("/perfil");
    } else{
        next();
    }
}

// Rutas asociadas a las paginas del sitio web
app.get("/",(req,res)=>{
    res.render("home")
});

app.get("/registro",checkSession,(req,res)=>{
    res.render("signup")
});

app.get("/inicio-sesion",checkSession,(req,res)=>{
    res.render("login")
});

app.get("/perfil",(req,res)=>{
    if(req.session.user){
        res.render("profile");
    } else {
        res.send("<div>Debes <a href'/inicio-sesion'>inciar sesion</a> o <a href='/registro'>registrarte</a></div>")
    }
});

let users = [];

// Rutas de autenticacion
app.post("/signup",(req,res)=>{
    // console.log(req.session);
    const newUser = req.body;
    // El usuario existe?
    const userExists = users.find(elm=>elm.email === newUser.email);
    if(userExists){
        // res.status(401).send("usuario ya registrado")
        res.render("signup",{error:"Usuario ya registrado. Intenta iniciar sesion"});
    } else {
        users.push(newUser);
        req.session.user = newUser;
        res.redirect("/perfil")
    }
});

app.post("/login",(req,res)=>{
    const user = req.body;
    // El usuario existe
    const userExists = users.find(elm=>elm.email === user.email);
    if(userExists){
        // Validar la contraseña
        if(userExists.password === user.password){
            req.session.user = user;
            res.redirect("/perfil")
        } else {
            res.redirect("/inicio-sesion")
        }
    } else {
        res.redirect("/registro");
    }
});

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
});