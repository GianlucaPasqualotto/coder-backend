import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.listen(8080,()=>console.log("Server listening on port 8080"));

app.use(cookieParser("claveUltraSecreta")) // Le estamos indicando al servidor que utilice cookies

app.get("/set-cookie1",(req,res)=>{
    res.cookie("galleta1", "oreo").send("Cookie 1 creada");
});

// Cookie con tiempo de vida de 5 segundos
app.get("/set-cookie2",(req,res)=>{
    res.cookie("galleta2", "pepito",{
        maxAge:5000
    }).send("Cookie 2 creada");
});

// Leer cookies
app.get("/get-cookies",(req,res)=>{
    const cookies = req.cookies;
    res.send(cookies);
});

// Eliminar una cookie
app.get("/delete-cookie",(req,res)=>{
    res.clearCookie("galleta1").send("cookie 1 eliminada");
});

app.get("/login",(req,res)=>{
    res.cookie("loginInfo",{name:"pepito", role:"lector"},{signed:true}).send("Sesion iniciada");
});

app.get("/cookie-signed",(req,res)=>{
    res.send(req.signedCookies);
})