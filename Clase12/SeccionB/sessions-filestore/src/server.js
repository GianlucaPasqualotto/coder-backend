import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import fileStategy from "session-file-store";

const app = express();
app.listen(8080,()=>console.log("Server listening on port 8080"));

app.use(cookieParser());
const FileStore = fileStategy(session); // Vinculamos el storage de los archivos con las sesiones

app.use(session({
    // Configurar la memoria para guardar las diferentes sesiones
    store:new FileStore({
        path:"./src/sessions",
        ttl:3600 // Tiempo máximo de la sesion
    }),
    // Clave para encriptar los sessionId
    secret:"claveUltraSecreta",
    // Almacenamiento externo de las sesiones
    resave:false,
    saveUninitialized:false
}))

app.get("/login",(req,res)=>{
    const {user} = req.query;
    if(req.session.username){
        return res.redirect("/perfil")
    } else {
        if(user){
            req.session.username = user;
            res.send("Sesion iniciada");
        } else {
            res.send("Por favor, ingresa el usuario")
        }
    }
});

app.get("/perfil",(req,res)=>{
    console.log(req.session);
    if(req.session.username){
        res.send(`Bienvenido ${req.session.username}`)
    } else {
        res.redirect("/login")
    }
});

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send(`Hasta luego`)
});