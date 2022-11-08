const level = Object.freeze({
    DEBUG: "DEBUG",
    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR",
});


function print(name, level, ...args) {
    console.log(`[${name}] [${level}]`, ...args);
}


export const Logger = (name) => ({
    debug(...args) {
        if (process.env.LOG_LEVEL !== level.DEBUG) {
            return;
        }
        print(name, level.DEBUG, ...args);
    },
    info(...args) {
        print(name, level.INFO, ...args);
    },
    warn(...args) {
        print(name, level.WARN, ...args);
    },
    error(...args) {
        // TODO: Aquí se puede generar una notificación por slack o telegram para informar de un error encontrado
        print(name, level.ERROR, ...args);
    },
});
