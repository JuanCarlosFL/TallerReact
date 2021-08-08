import {CharacterVM} from './vm';
import {Character} from './api';
import { mapToCollection } from '../../common/mappers';

export const mapCharacterApiToVM = (character: Character): CharacterVM => {
    return {
        id: character.id,
        gender: character.gender,
        image: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
        url: character.url
    }
}

export const mapCharacterListFromApiToVm = (characterList: Character[]): CharacterVM[] =>
  mapToCollection(characterList, t => mapCharacterApiToVM(t));