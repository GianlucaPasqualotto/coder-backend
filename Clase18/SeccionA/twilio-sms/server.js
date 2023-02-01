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

app.post("/twilio-sms",async(req,res)=>{
    try {
        // Utilizamos el cliente de Twilio para enviar un mensaje
        const response = await client.messages.create({
            body: "¡Bienvenido! Gracias por unirte a nuestra suscripción de Twilio",
            from:"+13856449149", // Emisor del mensaje
            to:"+542616751923" // Receptor del mensaje
        });
        res.send(`Mensaje enviado ${response}`)
    } catch (error) {
        res.send(error)
    }
})
