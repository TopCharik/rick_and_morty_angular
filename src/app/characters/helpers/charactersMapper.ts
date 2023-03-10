import {CharactersQuery} from "../models/characterQuery";
import {HttpParams} from "@angular/common/http";
import {Params} from "@angular/router";

export const mapRouteParamsToCharacterQuery = (params: Params): CharactersQuery => {
  return {
    name: params['name'] ?? '',
    type: params['type'] ?? '',
    status: params['status'] ?? '',
    species: params['species'] ?? '',
    gender: params['gender'] ?? '',
    page: isNaN(params['page']) ? 1 : +params['page'],
  };
}
export const mapCharacterParamsToHttpParams = (params: CharactersQuery): HttpParams => {
  let httpParams = new HttpParams();
  if (params.page !== 1){
    httpParams = httpParams.append('page', params.page);
  }
  if (params.name !== undefined && params.name !== ''){
    httpParams = httpParams.append('name', params.name);
  }
  if (params.type !== undefined && params.type !== ''){
    httpParams = httpParams.append('type', params.type);
  }
  if (params.gender !== undefined && params.gender !== ''){
    httpParams = httpParams.append('gender', params.gender);
  }
  if (params.species !== undefined && params.species !== ''){
    httpParams = httpParams.append('species', params.species);
  }
  if (params.status !== undefined && params.status !== ''){
    httpParams = httpParams.append('status', params.status);
  }
  return httpParams;
}
