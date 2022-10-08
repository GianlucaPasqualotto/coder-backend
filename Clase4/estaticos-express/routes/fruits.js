const { application } = require("express");
const express = require("express");
const router = express.Router();

const fruits = [
    {id:1, name:"pera", price:200},
    {id:2, name:"manzana", price:100},
    {id:3, name:"sandia", price:300},
]

router.get("/", (request,response)=>{
    if(Object.keys(request.query).length>0){
        //console.log("request", request.query)
        const{name} = request.query;
        const newFruits = fruits.filter(elm=>elm.name === name);
        response.send(newFruits);
    } else {
    response.send(fruits);
    }
})

router.get("/fruits", (request,response)=>{
    if(Object.keys(request.query).length>0){
        //console.log("request", request.query)
        const{name} = request.query;
        const newFruits = fruits.filter(elm=>elm.name === name);
        response.send(newFruits);
    } else {
    response.send(fruits);
    }
})

router.get("/fruits/:idFruits", (req,res)=>{
    const {idFruits} = req.params;
    const product = fruits.find(elm=>elm.id===parseInt(idFruits));
    res.send(product);
})


//petición tipo post, para guardar un elemento
router.post("/fruits", (req,res)=>{
    const newFruit = req.body;
    fruits.push(newFruit)
    res.send(fruits);
})

//actualizacion tipo put
router.put("/fruits/:id", (req,res)=>{
    const {id} = req.params;
    const modificacion = req.body;
    console.log(id, modificacion);
    const fruitPos = fruits.findIndex(elm=>elm.id===parseInt(id));
    if(fruitPos>=0){
        //modificamos el elemento
        fruits[fruitPos] = modificacion;
        res.status(200).send(fruits)
    } else {
        res.status(404).send("El elemento no se encontró");
    }
})

router.get("/peras", (req,res)=>{
    //listado peras
})

module.exports = router;