import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CharactersQuery} from "../models/characterQuery";
import {mapCharacterParamsToHttpParams} from "../../characters/helpers/charactersMapper";
import {emptyApiResponse, PaginatedResponse} from "../models/paginatedResponse";
import {Character} from "../models/character";
import {catchError, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiProvider {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  loadCharacters(charactersParams?: CharactersQuery) {
    const httpParams = new HttpParams();
    if (charactersParams) {
      mapCharacterParamsToHttpParams(charactersParams);
    }

    return this.http.get<PaginatedResponse<Character>>(this.baseUrl + "/character", {params: httpParams}).pipe(
      catchError(err => {
        if (err.error.error === "There is nothing here") return of(emptyApiResponse);
        return throwError(() => err)
      }),
    )
  }

  loadSingleCharacter(id: number) {
    return this.http.get<Character>(this.baseUrl + `/character/${id}`);
  }


}
