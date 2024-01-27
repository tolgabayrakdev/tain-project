import { Exception } from "./exception.js";

export class BadRequest extends Exception{
    constructor(message){
        super(message, 400)
    }
}