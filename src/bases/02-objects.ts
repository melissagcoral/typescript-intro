export const pokemonIds = [1,20,30,34,54];

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'bulbasaur',
}

export const charmander: Pokemon = {
    id: 1,
    name: 'charmander',
    age: 12,
}

export const pokemons: Pokemon[] = [];

pokemons.push( bulbasaur, charmander);

console.log(pokemons);