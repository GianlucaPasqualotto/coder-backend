import { UserManager } from "../dbOperations/index.js";
// import { ProductRouter } from "../routes/api/product.routes.js";

export const getUsers = async ()=>{
    return await UserManager.getAll();
}

export const saveUser = async(body)=>{
    return await UserManager.save(body)
}


// export const addProductsToUsers = ()=>{
//     const users = await UserManager.getAll();
//     const products = await ProductManager.getAll();
//     users.forEach(user=>{
//         user.cart = products;
//         await UserManager.updateById(user,user.id)
//     })
// }