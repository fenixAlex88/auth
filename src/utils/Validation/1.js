import validation from "./validation.js";
import required from "./required.js";
import minLength from "./minLength.js";
import maxLength from "./maxLength.js";

let result = validation("Hello", [required(), minLength(3), maxLength(10)]);

console.log(result);

result = validation("", [required(), minLength(3), maxLength(10)]);

console.log(result);

result = validation("Hi", [required(), minLength(3), maxLength(10)]);

console.log(result);

result = validation("Hello world", [required(), minLength(3), maxLength(10)]);

console.log(result);
