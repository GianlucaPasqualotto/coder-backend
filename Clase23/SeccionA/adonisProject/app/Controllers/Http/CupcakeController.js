'use strict'
const Cupcake = use("App/Models/Cupcake");

class CupcakeController {
    async getAll(){
        try {
            const data = (await Cupcake.all()).toJSON();
            return data;
        } catch (error) {
            throw new Error(`Hubo un error ${error}`)
        }
    }
}

module.exports = CupcakeController
