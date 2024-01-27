import { Exception } from "./exception.js";

export class InternalServerError extends Exception {
    constructor(message) {
        super(message, 500)
    }
}