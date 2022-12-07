import express from "express";
import session from "express-session";

const app = express();
app.listen(8080,()=>console.log("Server listening on port 8080"));

app.use(session({
    // Encriptar la información
    secret: "claveUltraSecreta",

    // Indicamos donde se va a guardar la sesion - En este caso la vamos a guardar en la memoria del servidor
    resave: true,
    saveUninitialized: true,
    
    // Definir los parámetros de la cookie, por la cual va a viajar la sessionId
    cookie:{
        maxAge: 100000, // Máximo 10 minutos
    }
}));

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