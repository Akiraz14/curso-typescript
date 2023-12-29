// Practice Imports and Exports, Alias and Default Exports

// Normal Import
// import { Hero } from "../classes/Hero";

// Import with alias - Form 1
// import { Hero, Hero as SuperHero } from "../classes/Hero";
// Import with alias - Form 2
import * as HeroClasses from "../classes/Hero";

// Export default
import powers, { Power } from "../helpers/powers";

const Hero = 123;
// const ironman = new Hero("Ironman", 1, 36);
// const hulk = new SuperHero("Hulk", 2, 31);
const captain = new HeroClasses.Hero("Captain America", 3, 102);

// console.log(ironman);
// console.log(hulk);
console.log(captain);

console.log(powers)

