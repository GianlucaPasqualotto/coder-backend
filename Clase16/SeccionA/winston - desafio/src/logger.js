import winston, { transports } from "winston";
import { envConfig } from "./envConfig.js";

// Configuración para Winston
const prodLogger = winston.createLogger({
    transports:[
        new transports.File({filename:"./src/logs/debug.log", level:'debug'}),
        new transports.File({filename:"./src/logs/errores.log", level:'warn'})
    ]
});

const devLogger = winston.createLogger({
    transports:[
        new transports.Console({level:'Silly'})
    ]
});

let logger = null;

if(envConfig.NODE_ENV === "prod"){
    logger = prodLogger;
} else {
    logger = devLogger;
};

export {logger};