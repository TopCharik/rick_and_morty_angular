import {CharactersQuery} from "../models/characterQuery";
import {HttpParams} from "@angular/common/http";
import {Params} from "@angular/router";

export const mapRouteParamsToCharacterQuery = (params: Params): CharactersQuery => {
  const page = isNaN(+params['page']) ? 1 : +params['page'];
  const query: CharactersQuery = {page: page};

  if (params['name']) query.name = params['name'];
  if (params['type']) query.type = params['type'];
  if (params['gender']) query.gender = params['gender'];
  if (params['status']) query.status = params['status'];

  return query;
}
export const mapCharacterParamsToHttpParams = (params: CharactersQuery): HttpParams => {
  let httpParams = new HttpParams();

  for (const [key, value] of Object.entries(params)) {
    httpParams = httpParams.append(key, value);
  }

  return httpParams;
}
