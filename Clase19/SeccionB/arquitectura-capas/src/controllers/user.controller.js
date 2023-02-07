import { getUsers, saveUser } from "../services/user.services.js";

export const getUsersController = async (req,res)=>{
    try {
        const response = await getUsers();
        res.json({data:response})
    } catch (error) {
        res.json({message:`Hubo un error ${error}`})
    }
}

export const saveUsersController = async (req,res)=>{
    try {
        const response = await saveUser(req.body);
        res.json({data:response})
    } catch (error) {
        res.json({message:`Hubo un error ${error}`})
    }
}