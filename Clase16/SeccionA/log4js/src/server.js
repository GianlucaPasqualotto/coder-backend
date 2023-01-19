import express from "express";
import log4js from "log4js";

const app = express();

log4js.configure({
    appenders: {
        // Definimos la salida de datos terminal, archivo, base de datos
        consola:{type:"console"},
        archivo:{type:"file",filename:"./src/logs/demostracion.txt"}
    },
    categories: {
        default:{appenders:['consola','archivo'],level:'trace'}
    }
});

// Instancia de log4js
const logger = log4js.getLogger(); // Instacia de la categoria default

logger.trace("Imprimiendo mensaje de nivel trace");
logger.debug("Mensaje de nivel debug");
logger.info("Mensaje de nivel info");
logger.warn("Mensaje de nivel warn");
logger.error("Mensaje de nivel error");
logger.fatal("Mensaje de nivel fatal");

const PORT = 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${8080}`));

