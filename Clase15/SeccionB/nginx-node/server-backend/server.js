import express from "express";
const app = express();

// app.use(express.static("public"));

const PORT = process.argv[2] || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT} on process ${process.pid}`));

app.get("/perfil", (req,res)=>{
    res.send(`Respuesta desde el puerto ${PORT} en el proceso ${process.pid}`);
});