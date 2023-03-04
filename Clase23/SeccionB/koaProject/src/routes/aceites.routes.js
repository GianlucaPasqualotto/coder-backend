import Router from "koa-router";

const router = new Router({
    prefix:"/aceites"
});

let aceites = [];

// Definir las rutas
router.get("/",(ctx)=>{
    //req.body => ctx.request.body
    //req.send => ctx.body
    //res.status => ctx.response.status
    //req.params => ctx.request.params
    //req.query => ctx.request.query
    ctx.body = {
        status:"succes",
        data:aceites
    }
})

router.post("/",(ctx)=>{
    //body de la peticion
    const aceitesBodyInput = ctx.request.body;
    aceites.push(aceitesBodyInput);
    ctx.response.status = 200;
    ctx.body = {
        status:"succes",
        data:"Producto cargado"
    }
})

export {router as aceitesRouter};