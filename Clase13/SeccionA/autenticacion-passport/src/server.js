// Importaciones
import express from "express";
import session from "express-session";
import handlebars from "express-handlebars";
import { dirname } from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local"; // Estrategia para autenticar por correo y psw
import bcrypt from "bcrypt"; // Encriptar las contraseñas
import mongoose from "mongoose"; // Db usuarios
import MongoStore from "connect-mongo"; // Store session
import { UserModel } from "./models/user.js";
import { Strategy as TwitterStrategy } from "passport-twitter";

// Conectamos a la base de datos
const mongoUrl = "mongodb+srv://GianlucaPasqualotto:riverplate1096@ecommerce-backend.bvtacrv.mongodb.net/authDB?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(error)=>{
    if(error) return console.log(`Hubo un error conectandose a la base ${error}`);
    console.log("Conexion exitosa con la base de datos")
});

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
    // Definimos el session store
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://GianlucaPasqualotto:riverplate1096@ecommerce-backend.bvtacrv.mongodb.net/sessionsDB?retryWrites=true&w=majority"
    }),
    secret:"claveSecreta", // Clave de encriptacion de la sesion

    // Configuracion para guardar en la memoria del servidor
    resave:false,
    saveUninitialized:false,
}));

// Configurar Passport
app.use(passport.initialize()); // Conectamos passport con express
app.use(passport.session()); // Vinculacion entre passport y las sesiones de usuarios

// Serializar un usuario
passport.serializeUser((user,done)=>{
    done(null,user.id)
});

// Deserializar un usuario
passport.deserializeUser((id,done)=>{
    // Validar si el usuario existe
    UserModel.findById(id,(err,userFound)=>{
        if(err) return done (err);
        return done(null,userFound)
    })
});

// Crear una funcion para encriptar una contraseña
const createHash = (password)=>{
    const hash = bcrypt.hashSync(password,bcrypt.genSaltSync(10));
    return hash;
}

// Estrategia de registro utilizando passport local
passport.use("signupStrategy",new LocalStrategy(
    {
        passReqToCallback:true,
        usernameField:"email"
    },
    (req,username,password,done)=>{
        // Logica para registrar al usuario
        // Verificar si el usuario existe
        UserModel.findOne({username:username},(error,userFound)=>{
            
            if(error) return done(error,null,{message:"Hubo un error"}); 
            if(userFound) return done(null,null,{message:"El usuario ya existe"});
            // Guardamos el usuario
            const newUser = {
                name:req.body.name,
                username:username,
                password:createHash(password)
            };
            UserModel.create(newUser,(error,userCreated)=>{
                if(error) return done(error,null,{message:"Hubo un error al registrar el usuario"})
                return done(null,userCreated);
            })
        })
    }
));

// Estrategia para loguear usuarios a traves de twitter
passport.use("twitterLogin", new TwitterStrategy(
    {
        consumerKey:"CVtZYKrb78s0nK5omJonrqhpK",
        consumerSecret:"aarkLhinm7zdc38Y2fbpMwDBpT9YIYLyZgfd4lHF38qMkS4ocd",
        callbackURL:"http://localhost:8080/auth/twitter/callback"
    },
    (token,accesToken,profile,done)=>{
        UserModel.findOne({username:profile.username},(error,userFound)=>{
            if(error) return done(error,null,{message:"Hubo un error"}); 
            if(userFound) return done(null,userFound);
            // Guardamos el usuario
            const newUser = {
                name:profile.displayName,
                username:profile.username,
                password:profile.id
            };
            UserModel.create(newUser,(error,userCreated)=>{
                if(error) return done(error,null,{message:"Hubo un error al registrar el usuario"})
                return done(null,userCreated);
            })
        })        
    }
));

// Middleware para validar la sesion del usuario
// const checkSession = (req,res,next)=>{
//     // Validamos si la sesion esta activa
//     if(req.session.user){
//         res.redirect("/perfil");
//     } else{
//         next();
//     }
// }

// Rutas asociadas a las paginas del sitio web
app.get("/",(req,res)=>{
    res.render("home")
});

app.get("/registro",(req,res)=>{
    const errorMessage = req.session.messages ? req.session.messages[0] : '';
    res.render("signup",{error:errorMessage});
    req.session.messages = [];
});

app.get("/inicio-sesion",(req,res)=>{
    res.render("login")
});

app.get("/perfil",(req,res)=>{
    if(req.isAuthenticated()){
        res.render("Profile");
    } else {
        res.send("<div>Debes <a href='/inicio-sesion'>inciar sesion</a> o <a href='/registro'>registrarte</a></div>")
    }
});

// Rutas de autenticacion
app.post("/signup",passport.authenticate("signupStrategy",{
    failureRedirect:"./registro",
    failureMessage:true // req.sessions.messages
}),(req,res)=>{
    res.redirect("/perfil")
});

app.post("/login",(req,res)=>{
    const user = req.body;
    // El usuario existe
    const userExists = user.find(elm=>elm.email === user.email);
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

app.get("/login-twitter",passport.authenticate("twitterLogin"));

app.get("/auth/twitter/callback",passport.authenticate("twitterLogin",{
    failureRedirect:"/login",
    failureMessage:true
}),(req,res)=>{
    res.redirect("/perfil")
});

app.get("/logout",(req,res)=>{
    req.logout(err=>{
        if(err) return res.send("Hubo un error al cerrar sesion")
        req.session.destroy();
        res.redirect("/")
    });
});