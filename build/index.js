"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const tools_1 = require("./tools");
let firstName = "Pius";
let lastName = "Onobhayedo";
let gender = "male";
let height = 1.7;
let hobbies = ['Tennis', 'Programming'];
let birthday = new Date(1900, 4, 5);
let isAlive = true;
let person1 = new tools_1.Person(firstName, lastName, gender, height, hobbies, birthday, isAlive);
(0, console_1.log)(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is $ {person1.birthday.toLocaleDateString()}`);
//# sourceMappingURL=index.js.map