import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CharactersQuery} from "../../shared/models/characterQuery";

@Injectable({
  providedIn: 'root'
})
export class CharactersQueryService {
  private _currentQuery = new BehaviorSubject<CharactersQuery>({page: 0});
  public currentQuery$ = this._currentQuery.asObservable();

  getCurrentQuery() {
    return this._currentQuery.getValue();
  }

  setCurrentQuery(query: CharactersQuery) {
    this._currentQuery.next(query);
  }

  constructor() { }
}
