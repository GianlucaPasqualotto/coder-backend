import admin from "firebase-admin";
import {readFileSync} from "fs";
const serviceAccount = JSON.parse(readFileSync("./firebaseKey.json"));
// console.log(serviceAccount);

// Inicializar firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:"http://e-commercebackend-rls.firebaseio.com",
});
console.log("Base conectada exitosamente");

const operacionesCRUD = async()=>{
    // Generar una instancia de la base de datos
    const db = admin .firestore();
    // Definir la colección 
    const productosCollection = db.collection("productos");

    // Guardar un documento
    const doc = productosCollection.doc();
    // await doc.create({nombre:"Aceite Castrol", precio:7500});
    // console.log("Producto creado");

    // Guardar varios documentos
    // let batch = db.batch();
    // const productos = [
    //     {nombre: "Aceite Mobil", precio:6500},
    //     {nombre: "Aceite Total", precio:8500},
    //     {nombre: "Aceite Petronas", precio:9500},
    // ];
    // productos.forEach(producto=>{
    //     const docRef = db.collection("productos").doc(); // Creamos una instancia del doc que vamos a guardar
    //     batch.set(docRef, producto)
    // });
    // await batch.commit();

    // Read
    // let response = await productosCollection.get();
    // let docs = response.docs; // los documentos de la coleccion productos
    // let productos = docs.map(doc=>({
    //     id:doc.id,
    //     nombre: doc.data().nombre,
    //     precio: doc.data().precio
    // }))
    // console.log(productos)

    // Update de un dato
    // const docId = "Xxe9dg6nHqMCkb3EDPjj";
    // const refDoc = db.collection("productos").doc(docId);
    // await refDoc.update({precio:7500});

    // Eliminar un dato
    // const docId = "Xxe9dg6nHqMCkb3EDPjj";
    // const refDoc = db.collection("productos").doc(docId);
    // await refDoc.delete();
}
operacionesCRUD();