import express from "express";
import {connectDB} from "./config/dbConfig.js";
import { apiRouter } from "./routes/index.js";

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

app.use("/api",apiRouter)