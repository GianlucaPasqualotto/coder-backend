import pino from "pino";
import { envConfig } from "./envConfig.js";

// Configuración para Pino
const prodLogger = pino('./src/logs/errores.log');
prodLogger.level = "warn";

const devLogger = pino();
devLogger.level = "info";

let logger = null;

if(envConfig.NODE_ENV === "prod"){
    logger = prodLogger;
} else {
    logger = devLogger;
};

export {logger};