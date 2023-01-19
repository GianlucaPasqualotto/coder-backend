import log4js from "log4js";
import { envConfig } from "./envConfig.js";

// Configuracipin de log4js
log4js.configure({
    appenders:{
        // Definir las salidas de datos
        consola: {type:"console"},
        archivoErrores: {type:"file", filename:"./src/logs/errores.log"},
        archivoDebug: {type:"file", filename:"./src/logs/debug.log"},
        // Salidas con niveles definidos
        loggerConsola: {type:"logLevelFilter", appender:'consola', level:'info'},
        loggerErrores: {type:"logLevelFilter", appender:'archivoErrores', level:'warn'},
        loggerDebug: {type:"logLevelFilter", appender:'archivoDebug', level:'debug'},
    },
    categories:{
        default:{appenders:['loggerConsola'], level:'all'},
        produccion:{appenders:['loggerErrores', 'loggerDebug'], level:'all'}
    }
});

let logger = null;

if(envConfig.NODE_ENV === "prod"){
    logger = log4js.getLogger("produccion");
} else {
    logger = log4js.getLogger()
};

export {logger};