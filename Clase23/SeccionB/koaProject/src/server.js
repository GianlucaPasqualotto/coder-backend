import koa from "koa";
import {koaBody} from "koa-body"
import {aceitesRouter} from "./routes/aceites.routes.js";

const app = new koa();
app.use(koaBody())

app.use(aceitesRouter.routes());

const PORT = 8080;

app.listen(PORT,()=>{console.log("Server listening on port 8080")})