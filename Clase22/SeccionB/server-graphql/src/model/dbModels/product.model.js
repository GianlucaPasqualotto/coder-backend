import mongoose from "mongoose";

const productCollection = "products";

const productSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    categoria:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

export const ProductModel = mongoose.model(productCollection, productSchema);