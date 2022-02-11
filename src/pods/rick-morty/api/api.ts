import { Character } from "./vm.api";

const urlGetAll = `https://rickandmortyapi.com/api/character`;

export const getAll = async () => {
    const characters = await fetch(urlGetAll, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    })
        .then(response => response.json())

    return characters.results;
}

export const getCharacter = async (id: number): Promise<Character> => {
    const character = await fetch(`${urlGetAll}/${id}`)
        .then(response => response.json());

    return character;
} 
