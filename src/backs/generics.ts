// Practice generic functions
import * as Generic from "../generics/generic-functions";
// import { Hero } from "../interfaces/hero";
// import { Villian } from "../interfaces/villian";

// We can import all the interfaces by using an "index.ts" file and exporting all the interfaces we want to have.
import { Hero, Villian } from "../interfaces";

Generic.printObject(123);
Generic.printObject(new Date());
Generic.printObject({ a:1, b:2, c:3});
Generic.printObject([1,2,3,4,5,6,7,8,9,10]);
Generic.printObject("Hello World!");
Generic.printObject({ name: "Ironman"});

console.log(Generic.genericFnAny(3.141618).toFixed(2));
// Error, we cannot use the "toFixed" method 
//console.log(Generic.genericFnAny(new Date()).toFixed(2));

// Now TS helps us by saying that the "toFixed" method cannot be applied to a string type.
//console.log(Generic.genericFnT("Juan").toFixed());
console.log(Generic.genericFnT("Juan").toUpperCase());
console.log(Generic.genericArrowFn(new Date).getFullYear());

const deadpool = {
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    dangerLevel: 130,
}
const spiderman = {
    name: "Deadpool",
    realName: "Wade Winston Wilson",
}

console.log(Generic.genericArrowFn<Hero>(deadpool).realName);
// Now we cannot use "dangerLevel" property because Hero interface doesn't have it.
//console.log(Generic.genericArrowFn<Hero>(deadpool).dangerLevel);
console.log(Generic.genericArrowFn<Villian>(deadpool).dangerLevel);
// Error, object must have all properties declared in the interface.
//console.log(Generic.genericArrowFn<Villian>(spiderman).dangerLevel);
