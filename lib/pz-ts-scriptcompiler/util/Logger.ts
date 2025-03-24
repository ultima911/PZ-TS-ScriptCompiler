export abstract class Logger {
    public static log(message: any): void {
        const timestamp = new Date().toISOString();
        const logString = `(${timestamp}) LOG: ${message}`;
        console.log('\x1b[36m%s\x1b[0m', logString);
    }

    public static info(message: any): void {
        const timestamp = new Date().toISOString();
        const logString = `(${timestamp}) INFO: ${message}`;
        console.info('\x1b[36m%s\x1b[0m', logString);
    }

    public static warn(message: any): void {
        const timestamp = new Date().toISOString();
        const logString = `(${timestamp}) WARN: ${message}`;
        console.warn('\x1b[33m%s\x1b[0m', logString);
    }

    public static error(message: any): void {
        const timestamp = new Date().toISOString();
        const logString = `(${timestamp}) ERROR: ${message}`;
        console.error('\x1b[31m%s\x1b[0m', logString);
    }

    public static debug(message: any): void {
        const timestamp = new Date().toISOString();
        const logString = `(${timestamp}) DEBUG: ${message}`;
        console.debug('\x1b[35m%s\x1b[0m', logString);
    }
}
