import {Character} from "../../models/character";
import {ModelState} from "../../models/modelState";


export type SingleCharacterState = ModelState<Character>;

export const singleCharacterInitialState: SingleCharacterState = {
  isLoading: false,
  isLoaded: false,
}
