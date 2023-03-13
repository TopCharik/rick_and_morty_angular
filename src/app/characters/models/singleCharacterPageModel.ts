import {Character} from "../../shared/models/character";
import {CharactersQuery} from "../../shared/models/characterQuery";

export type SingleCharacterModel = {
  character: Character,
  returnQuery: CharactersQuery,
};
