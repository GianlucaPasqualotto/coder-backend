import express from "express";
import { UserRouter } from "./routes/user.js";

const app = express();
app.listen(8080,()=>console.log("Server running"));

app.use("/api/usuarios", UserRouter);
