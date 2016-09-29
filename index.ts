import * as Joi from "joi";

export class BananaSuper {
    banana(s: string) {
        return "Banana" + " " + s;
    }
}

let banana = new BananaSuper();
let bananaString = banana.banana("banana");
console.log(bananaString);