export class Exception extends Error {
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = this.name;
        this.statusCode = statusCode;
    }
}