import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {initialPaginationState, PaginationState} from "../shared/models/paginationState";
import {PaginationInfo} from "../shared/models/paginationInfo";
import {CharactersQuery} from "../shared/models/characterQuery";
import {Character} from "../shared/models/character";
import {ApiProvider} from "../shared/services/api-provider.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

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

  constructor(private apiProvider: ApiProvider) {}

  loadCharacters(charactersParams: CharactersQuery) {
    this.apiProvider.loadCharacters()
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
    return this.apiProvider.loadSingleCharacter(id);
  }

}

