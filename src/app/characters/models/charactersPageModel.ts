import {PaginatedModelState} from "../../models/paginatedModelState";
import {Character} from "../../models/character";

export type CharactersState = PaginatedModelState<Character>;

export const charactersPageInitialState: CharactersState = {
  isLoading: false,
  isLoaded: false,
  paginationInfo: {
    hasPrev: false,
    hasNext: false,
  },
  data: [],
};
