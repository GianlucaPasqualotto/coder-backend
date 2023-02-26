// import {MongoContainer} from "./managers/mongo.manager.js";
// import {UserModel} from "./dbModels/user.model.js";

// export const UserManager = new MongoContainer(UserModel);

// Fabrica
import {UserModel} from "./dbModels/user.model.js";
import {ProductModel} from "./dbModels/product.model.js";
import {options} from "../config/config.js";
import {MyMongoClient} from "./clients/dbClientMongo.js";

export async function getApiDao(dbType){
    let UserDaoContainer;
    let ProductDaoContainer;
    switch (dbType) {
        case 'MONGO':
            const {UserMongoDao} = await import("./daos/users/userMongoDao.js");
            const {ProductMongoDao} = await import("./daos/products/productMongoDao.js");
            // Conectamos a la base de datos Mongo
            const client = new MyMongoClient();
            await client.connect();
            UserDaoContainer = new UserMongoDao(UserModel);
            ProductDaoContainer = new ProductMongoDao(ProductModel);
            break;
        default:
            break;
    }
    return {UserDaoContainer,ProductDaoContainer}
}