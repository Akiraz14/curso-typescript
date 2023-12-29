import { Pokemon } from "./decorators/Pokemon-class";

const charmander = new Pokemon("Charmander");

// Adding a property to the prototype
// (Pokemon.prototype as any).customName = "Pikachu";

console.log(charmander);

charmander.savePokemonToDB(-151);
charmander.savePokemonToDB(151);

charmander.publicApi = "https://google.com";
