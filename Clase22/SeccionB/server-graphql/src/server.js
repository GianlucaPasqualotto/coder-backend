import express from "express";
import { connectDB } from "./config/dbConfig.js";
import {options} from "./config/config.js";
import { __dirname } from "./util.js";
import {apiRouter} from "./routes/index.js";
import cors from "cors";
import { userGraphqlController } from "./controllers/user.controller.graphql.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:3000",
    methods:['PUT', 'POST']
}));

//routes
app.use(apiRouter);
app.use("/graphql", userGraphqlController());

const PORT = options.server.PORT;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

export {app};