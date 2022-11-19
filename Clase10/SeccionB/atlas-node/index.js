import mongoose from "mongoose";
import { productosModel } from "./models/productos.js";

const URL = "mongodb+srv://GianlucaPasqualotto:riverplate1096@ecommerce-backend.bvtacrv.mongodb.net/ecommerce?retryWrites=true&w=majority"
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, error=>{
    if(error) throw new Error(`Connection failed ${error}`);
    console.log("Conexión exitosa")
})

const operaciones = async()=>{
    // Insertar productos
    const newProductos = [
            {nombre:"Aceite Castrol", stock:10, price:120, url:"https://http2.mlstatic.com/D_NQ_NP_656681-MLA52027265695_102022-O.webp"},
            {nombre:"Aceite Mobil", stock:10, price:580, url:"https://http2.mlstatic.com/D_NQ_NP_995600-MLA49805367577_042022-O.webp"},
            {nombre:"Aceite Petronas", stock:10, price:900, url:"https://http2.mlstatic.com/D_NQ_NP_928373-MLA49094459905_022022-O.webp"},
            {nombre:"Aceite Total", stock:10, price:1280, url:"https://http2.mlstatic.com/D_NQ_NP_818827-MLA51985720412_102022-O.webp"},
            {nombre:"Luz Cree Led", stock:10, price:1700, url:"https://http2.mlstatic.com/D_NQ_NP_613239-MLA52128269994_102022-O.webp"},
            {nombre:"Batería Herbo", stock:10, price:2300, url:"https://http2.mlstatic.com/D_NQ_NP_823749-MLA41149073194_032020-O.webp"},
            {nombre:"Kit Filtros Wega", stock:10, price:2850, url:"https://http2.mlstatic.com/D_NQ_NP_798099-MLA31630149048_072019-O.webp"},
            {nombre:"Filtro de aceite Wega", stock:10, price:3350, url:"https://http2.mlstatic.com/D_NQ_NP_915444-MLA46125764100_052021-O.webp"},
            {name:"Filtro de combustible Wega", stock:10, price:4320, url:"https://http2.mlstatic.com/D_NQ_NP_986908-MLA45668544010_042021-O.webp"},
            {name:"Filtro de habitáculo Wega", stock:10, price:4990, url:"https://http2.mlstatic.com/D_NQ_NP_785444-MLA32157811901_092019-O.webp"}
        ];
        let result = await productosModel.insertMany(newProductos);
        console.log(result);
}
operaciones()