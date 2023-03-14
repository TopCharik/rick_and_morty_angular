import {Character} from "../../shared/models/character";
import {CharactersQuery} from "../../shared/models/characterQuery";
import {ModelState} from "../../shared/models/modelState";

export type SingleCharacterModel = {
  character: Character,
  returnQuery: CharactersQuery,
};

export type SingleCharacterState = ModelState<SingleCharacterModel>;

export const singleCharacterInitialState: SingleCharacterState = {
  isLoading: false,
  isLoaded: false,
  error: null,
}
