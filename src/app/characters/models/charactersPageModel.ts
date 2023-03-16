import {PaginatedModelState} from "../../shared/models/paginatedModelState";
import {Character} from "../../shared/models/character";

export type CharactersState = PaginatedModelState<Character>;

export const charactersPageInitialState: CharactersState = {
  isLoading: false,
  paginationInfo: {
    hasPrev: false,
    hasNext: false,
  },
  data: [],
};
