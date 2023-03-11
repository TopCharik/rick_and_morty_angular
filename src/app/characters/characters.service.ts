import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, throwError} from "rxjs";
import {initialPaginationState, PaginationState} from "./models/paginationState";
import {PaginationInfo} from "./models/paginationInfo";
import {CharactersQuery} from "./models/characterQuery";
import {Character} from "./models/character";
import {PaginatedResponse} from "./models/paginatedResponse";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {mapCharacterParamsToHttpParams} from "./helpers/charactersMapper";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseUrl = environment.apiUrl;

  private charactersSource = new BehaviorSubject<Character[]>([]);
  public characters$ = this.charactersSource.asObservable();

  private pagingInfoSource = new BehaviorSubject<PaginationState>(initialPaginationState);
  public pagingInfo$: Observable<PaginationInfo> = this.pagingInfoSource.asObservable().pipe(
    map(pagingState => {
      return {
        hasPrev: pagingState.prev !== null,
        hasNext: pagingState.next !== null,
      }
    }),
  );

  private _currentCharacterParams!: CharactersQuery;
  get currentCharacterParams(): CharactersQuery {
    return this._currentCharacterParams;
  }

  constructor(
    private http: HttpClient
  ) {  }

  loadCharacters(charactersParams: CharactersQuery) {

    const httpParams = mapCharacterParamsToHttpParams(charactersParams);
    this.http.get<PaginatedResponse<Character[]>>(this.baseUrl + "/character", {params: httpParams}).pipe(
      catchError(err => {
        if (err.error.error === "There is nothing here") return of(emptyApiResponse);
        return  throwError(() => err)
      })
    )
      .subscribe({
        next: res => {
          const characters = res.results;
          const paginationInfo = res.info;
          this.charactersSource.next(characters);
          this.pagingInfoSource.next(paginationInfo);
          this._currentCharacterParams = charactersParams;
        }
      })
  }

  getSingleCharacter(id: number) {
    return this.http.get<Character>(this.baseUrl + `/character/${id}`);
  }

}

const emptyApiResponse:PaginatedResponse<Character[]> = {
  info: {
    count: 0,
    pages: 0,
    prev: null,
    next: null,
  },
  results: []
}
