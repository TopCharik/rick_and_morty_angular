import {CharactersQuery} from "../models/characterQuery";
import {HttpParams} from "@angular/common/http";
import {Params} from "@angular/router";

export const mapRouteParamsToCharacterQuery = (params: Params): CharactersQuery => {
  return {
    name: params['name'],
    type: params['type'],
    status: params['status'],
    species: params['species'],
    gender: params['gender'],
    page: isNaN(params['page']) ? 1 : +params['page'],
  };
}
export const mapCharacterParamsToHttpParams = (params: CharactersQuery): HttpParams => {
  let httpParams = new HttpParams();
  if (params.page !== 1){
    httpParams = httpParams.append('page', params.page);
  }
  if (params.name !== undefined){
    httpParams = httpParams.append('name', params.name);
  }
  if (params.type !== undefined){
    httpParams = httpParams.append('type', params.type);
  }
  if (params.gender !== undefined){
    httpParams = httpParams.append('gender', params.gender);
  }
  if (params.species !== undefined){
    httpParams = httpParams.append('species', params.species);
  }
  if (params.status !== undefined){
    httpParams = httpParams.append('status', params.status);
  }
  return httpParams;
}
