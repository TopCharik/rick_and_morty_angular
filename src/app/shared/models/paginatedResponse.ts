import {initialPaginationState, PaginationState} from "./paginationState";
import {Character} from "./character";

export interface PaginatedResponse<T> {
  info: PaginationState
  results: T[]
}

export const emptyApiResponse:PaginatedResponse<Character> = {
  info: initialPaginationState,
  results: []
}
