import {ModelState} from "./modelState";
import {PaginationInfo} from "./paginationInfo";

export interface PaginatedModelState<T> extends ModelState<T[]>{
  paginationInfo: PaginationInfo;

}
