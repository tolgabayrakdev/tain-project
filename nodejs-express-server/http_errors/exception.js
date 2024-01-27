export class Exception extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = this.name;
        this.statusCode = statusCode;
    }
}