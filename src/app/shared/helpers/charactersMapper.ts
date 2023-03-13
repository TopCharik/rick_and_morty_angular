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
  httpParams = httpParams.append('page', params.page);

  httpParams = httpParams.append('name', params.name ?? "");
  httpParams = httpParams.append('type', params.type ?? "");
  httpParams = httpParams.append('gender', params.gender ?? "");
  httpParams = httpParams.append('status', params.status ?? "");
  httpParams = httpParams.append('species', params.species ?? "");

  return httpParams;
}
