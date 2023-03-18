import {Character} from "../../shared/models/character";
import {ModelState} from "../../shared/models/modelState";


export type SingleCharacterState = ModelState<Character>;

export const singleCharacterInitialState: SingleCharacterState = {
  isLoading: false,
  isLoaded: false,
}
