import express from "express";
import twilio from "twilio";

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

// Agregamos las credenciales de Twilio
const accountId = "AC9b728887284e1f2173b963c9f4911240";
const authToken = "9a4219cc1e981cb5333ba5a8d304a035";

// Crear cliente
const client = twilio(accountId,authToken);

const massiveMgs = (numero)=>{
    return {
        body: "Hola, bienvenidos a su suscripción. Le deseamos un feliz año",
        from:"whatsapp:+14155238886", // Emisor del mensaje
        to:`whatsapp:${numero}` // Receptor del mensaje
    }
}

const numeros = ["+5492616751923", "+5492615609163"];

app.post("/twilio-whatsapp",async(req,res)=>{
    try {
        // Utilizamos el cliente de Twilio para enviar un mensaje
        for(let i =0;i<numeros.length;i++){
            await client.messages.create(massiveMgs(numeros[i]));
        }
        res.send("Mensajes enviados")
    } catch (error) {
        res.send(error)
    }
})
