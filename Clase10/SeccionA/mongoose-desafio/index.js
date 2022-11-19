import mongoose from "mongoose";
import { StudentModel } from "./models/student.js";

//URL donde se ejecuta la base de datos
const URL = "mongodb://127.0.0.1:27017/colegio";

// Conecta la ruta a traves de mongoose
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error=>{
    if(error) throw new Error(`Conexión fallida ${error}`);
    console.log("Conexión base de datos exitosa")
})

const operacionesCRUD = async()=>{
    try {
        const newStudents = [
            { nombre: 'Gian', apellido: 'Pasqualotto', edad: 21, dni: '31257898', curso: '1A', nota: 7 },
            { nombre: 'Vale', apellido: 'Carrillo', edad: 32, dni: '27661878', curso: '1A', nota: 10 },
            { nombre: 'Nacho', apellido: 'Espeche', edad: 29, dni: '34584398', curso: '2A', nota: 6 },
            { nombre: 'Mari', apellido: 'Velasco', edad: 22, dni: '30354874', curso: '3A', nota: 8 },
            { nombre: 'Sebastian', apellido: 'Vigolino', edad: 36, dni: '28575148', curso: '1A', nota: 9 },
            { nombre: 'Lucia', apellido: 'Luing', edad: 41, dni: '320115321', curso: '2A', nota: 8 },
            { nombre: 'Juan', apellido: 'Jorge', edad: 19, dni: '38644790', curso: '2B', nota: 4 },
            { nombre: 'Martina', apellido: 'Carrillo', edad: 33, dni: '25935670', curso: '3B', nota: 2 },
            { nombre: 'Nicolas', apellido: 'Cassia', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
            { nombre: 'Analia', apellido: 'Garcia', edad: 25, dni: '37926460', curso: '3B', nota: 2 }
        ]
        // Guardar los estudiantes
        // let result = await StudentModel.insertMany(newStudents);
        // console.log(result)
    
        // Guardar un solo dato
        // let result = await StudentModel.create({nombre:"Juan"});
        // console.log(result);

        // Leer la colección estudiantes ordenados de forma alfabetica ascendente (1) descendente (-1)
        // let students = await StudentModel.find().sort({nombre:1})
        // console.log(students)
        
        // Obtener el estudiante más jóven
        // const younger = await StudentModel.find({},{nombre:1, edad:1, _id:0}).sort({edad:1}).limit(3)
        // console.log(younger)

        // Estudiantes que pertenecen al curso 2A
        // let result = await StudentModel.find({curso:"2A"},{nombre:1, curso:1, _id:0})
        // console.log(result)

        // El segundo estudiante más joven
        // const younger = await StudentModel.find({},{nombre:1, edad:1, _id:0}).sort({edad:1}).limit(1).skip(1);
        // console.log(younger)

        // Estudiantes que sacaron 10
        // const studentsNote10 = await StudentModel.find({nota:10},{nombre:1, edad:1, _id:0});
        // console.log(studentsNote10)

        // El promedio de notas del total de los alumnos
        // Agregacion
        // const result = await StudentModel.aggregate(
        //     [
        //         // agrupar a todos los estudiantes en un solo grupo
        //         {
        //             $group:{
        //                 // defino las propiedades de cada grupo
        //                 _id:"todos",
        //                 promedio:{$avg:"$nota"}
        //             }
        //         }
        //     ]
        // );
        // console.log(result)

        // El promedio de notas del curso 1A
        // const result = await StudentModel.aggregate(
        //     [
        //         // Agrupar los estudiantes del curso
        //         {
        //             $group:{
        //                 _id:"$curso",
        //                 promedio:{$avg:"$nota"}
        //             }
        //         },
        //         // Filtrar el grupo con el curso 1A
        //         {
        //             $match:{
        //                 _id:"1A"
        //             }
        //         }
        //     ]
        // );
        // console.log(result)

        // Actualizar el DNI del estudiante
        // let studentUpdate = await StudentModel.updateOne({nombre:"Gian", apellido:"Pasqualotto"}, {$set:{dni:40272197}});
        // console.log(studentUpdate);

        // Agregar un campo "ingreso" a todos los documentos con el valor false
        // let result = await StudentModel.updateMany({},{$set:{ingreso:false}});
        // console.log(result)

        // Modificar a los estudiantes del curso 1A el ingreso a true
        // let result = await StudentModel.updateMany({curso:"1A"},{$set:{ingreso:true}});
        // console.log(result);

        // Elimiar la coleccion de estudiantes donde ingreso sea true
        // let result = await StudentModel.deleteMany({ingreso:true})
        // console.log(result)

        // Agregar un nuevo estudiante
        let result = await StudentModel.create({ nombre: 'Carlos', apellido: 'Carrillo', edad: 25, dni: '40272199', curso: '3B', nota: 9 })
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}
operacionesCRUD();
