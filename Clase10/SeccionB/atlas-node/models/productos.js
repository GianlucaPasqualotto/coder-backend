import mongoose from "mongoose";

// Definir colección
const productosCollection = "productos";

// Definir esquema
const productosSchema = new mongoose.Schema({
    nombre:String,
    stock:Number,
    price:Number,
    url:String
})

// Generamos el modelo
export const productosModel = mongoose.model(productosCollection,productosSchema);

