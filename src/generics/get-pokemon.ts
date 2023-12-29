import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async(pokemonId: number|string): Promise<Pokemon> => {
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const { data } = resp;
    return data;
}

export const getPokemon2 = async(pokemonId: number|string) => {
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    console.log(resp.data.name);
    console.log(resp);
    return 1;
}

export const getPokemon1 = async() => {
    console.log("Hello World!");
    if (true) throw new Error("Help!!!!");
    return 1;
}