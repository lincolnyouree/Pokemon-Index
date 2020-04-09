const BASE_URL = 'http://pokeapi.co/api/v2/pokemon/'

export function getAllPokemon() {
    return fetch(`${BASE_URL}?limit=1000`, {mode: "cors"})
    .then(res => res.json());
}