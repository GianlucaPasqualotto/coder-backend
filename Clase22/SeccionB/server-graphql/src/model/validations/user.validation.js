import joi from "joi";

class UserValidation{
    static validateUser(user, required){
        const userSchemaValidation = joi.object({
            nombre: required ? joi.string().min(3).required() : joi.string(),
            apellido: required ? joi.string().required() : joi.string(),
            dni: required ? joi.string().required() : joi.string(),
        });
        const {error} = userSchemaValidation.validate(user);
        if(error){
            throw new Error(`Hubo un problema de validación ${error}`)
        }
    }
}

export {UserValidation}