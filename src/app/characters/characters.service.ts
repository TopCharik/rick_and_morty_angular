import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {PaginationInfo} from "../shared/models/paginationInfo";
import {CharactersQuery} from "../shared/models/characterQuery";
import {Character} from "../shared/models/character";
import {ApiProvider} from "../shared/services/api-provider.service";
import {CharactersQueryService} from "./services/characters-query.service";
import {charactersPageInitialState, CharactersState} from "./models/charactersPageModel";


@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  private charactersStateSource = new BehaviorSubject<CharactersState>(charactersPageInitialState);
  public charactersModel$: Observable<CharactersState> = this.charactersStateSource.asObservable();

  constructor(
    private apiProvider: ApiProvider,
    private characterQueryService: CharactersQueryService,
  ) {  }


  updateCharacters(characterParams: CharactersQuery) {
    this.updateState({
      isLoading: true,
      isLoaded: false,
    });

  loadCharacters(charactersParams: CharactersQuery) {

    this.apiProvider.loadCharacters(characterParams).pipe(
      tap(() => this.characterQueryService.setCurrentQuery(characterParams)),
      map(res => {
        return {
          characters: [...res.results],
          paginationInfo: {
            hasPrev: !!res.info.prev,
            hasNext: !!res.info.next,
          }
        }
      }),
      tap(() => this.updateState({
        isLoading: false,
        isLoaded: true,
      })),
    )
      .subscribe({
        next: res => {
          const characters: Character[] = res.characters;
          const paginationInfo: PaginationInfo = res.paginationInfo

          this.updateState({
            paginationInfo: paginationInfo,
            data: characters,
          });
        },
        error: err => {
          this.updateState({
            paginationInfo: {
              hasPrev: false,
              hasNext: false,
            },
            data: [],
            error: err,
          })
        }
      });
  }


  updateState(newState: Partial<CharactersState>) {
    const currentState = this.charactersStateSource.getValue();
    this.charactersStateSource.next({...currentState, ...newState});
  }
}

