import {PaginationState} from "./paginationState";

export interface PaginatedResponse<T> {
  info: PaginationState
  results: T
}
