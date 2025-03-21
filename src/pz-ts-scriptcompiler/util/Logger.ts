export abstract class Logger {
    public static log(str: string): void {
        const timestamp = new Date().toISOString();
        const logString = `(${timestamp}) LOG: ${str}`;
        console.log('\x1b[36m%s\x1b[0m', logString);
    }

    public static info(str: string): void {
        const timestamp = new Date().toISOString();
        const logString = `(${timestamp}) INFO: ${str}`;
        console.info('\x1b[36m%s\x1b[0m', logString);
    }

    public static warn(str: string): void {
        const timestamp = new Date().toISOString();
        const logString = `(${timestamp}) WARN: ${str}`;
        console.warn('\x1b[33m%s\x1b[0m', logString);
    }

    public static error(str: string): void {
        const timestamp = new Date().toISOString();
        const logString = `(${timestamp}) ERROR: ${str}`;
        console.error('\x1b[31m%s\x1b[0m', logString);
    }

    public static debug(str: string): void {
        const timestamp = new Date().toISOString();
        const logString = `(${timestamp}) DEBUG: ${str}`;
        console.debug('\x1b[35m%s\x1b[0m', logString);
    }
}
