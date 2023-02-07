import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    // Definimos las propiedades del documento User
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},
{
    timestamps:true
});

export const UserModel = mongoose.model(userCollection,userSchema);