import express from "express";
import crypto from "crypto";

// Comandos
// curl -X GET "http://localhost:8080/getUsers"

// curl -X GET "http://localhost:8080/newUser?username=Gian&password=1234"

// Profiling commands
// node --prof src/server.js

// artillery quick --count 10 -n 50 http://localhost:8080/auth-bloq?username=Gian&password=1234 > result_bloq.txt

// Funcion no bloqueante
// artillery quick --count 10 -n 50 http://localhost:8080/auth-nobloq?username=Gian&password=1234 > result_nobloq.txt

// Compilacion de archivos isolate
// node --prof-process isolate-bloq.log > result_prof_bloq.txt

// node --prof-process isolate-nobloq.log > result_prof_nobloq.txt

const app = express();

const users = {}

app.get("/getUsers", (req, res) => {
res.json({ users })
})

app.get("/newUser", (req, res) => {
    //recibimos los datos del nuevo usuario
    let username = req.query.username || "";
    const password = req.query.password || "";

    //corregimos caracteres indebidos. fredy% -> fredy
    username = username.replace(/[!@#$%^&*]/g, "");

    //verificamos si el usuario ingreso los datos y si ya existe
    if (!username || !password || users[ username ]) {
        return res.sendStatus(400);
    }

    //generamos un algoritmo para la encriptacion y finalmente el hash.
    const salt = crypto.randomBytes(128).toString("base64");
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");//1234->kjahdhgasd

    //guardamos al usuario =>{users:{"fredy":{salt:jhsgd,hash:hjgjh}}}
    users[ username ] = { salt, hash };
    res.sendStatus(200);
});

app.get("/auth-bloq", (req, res) => {
    //fredy ,password:1234
    let username = req.query.username || "";
    const password = req.query.password || "";

    username = username.replace(/[!@#$%^&*]/g, "");

    if (!username || !password || !users[ username ]) {
        return res.sendStatus(400);
    }

    const { salt, hash } = users[ username ];

    //encriptacion de la contrasena del login
    const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

    //comparar contrasenas encriptadas
    if (crypto.timingSafeEqual(hash, encryptHash)) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});


app.get("/auth-nobloq", (req, res) => {
    let username = req.query.username || "";
    const password = req.query.password || "";

    username = username.replace(/[!@#$%^&*]/g, "");

    if (!username || !password || !users[ username ]) {
        return res.sendStatus(400);
    }

    crypto.pbkdf2(password, users[ username ].salt, 10000, 512, 'sha512', (err, hash) => {
        if (users[ username ].hash.toString() === hash.toString()) {
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
    });
});

const PORT = parseInt(process.argv[ 2 ]) || 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en servidor: ${error}`));