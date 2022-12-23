import * as dotenv from "dotenv";

const evnFile = process.env.NODE_ENV === "dev" ? ".env.development" : ".env.production";

dotenv.config({
    path:".env.production"
}); // Asigna las variables del archivo .env a process.evn {PORT:"", MODO:""}

// Creamos la configuracion de nuestra aplicacion
export const config = {
    PORT: process.env.PORT || 8080,
    MODO: process.env.MODO || "PRUEBAS",
    BASE_DE_DATOS: process.env.BASE_DE_DATOS || "",
    LENGUAGE: process.env.LENGUAGE || "english"
};