import { getPokemon, getPokemon2 } from "../generics/get-pokemon";

getPokemon2("ho-oh")
    .then(resp => console.log(resp))
    .catch(err => console.error(err))
    .finally(() => console.log("End of the call..."));

getPokemon(151)
    .then(pokemon => {
        console.log(pokemon.name);
        console.log(pokemon.sprites.front_default);
    })
    .catch(err => console.error(err))
    .finally(() => console.log("End of the call..."));
