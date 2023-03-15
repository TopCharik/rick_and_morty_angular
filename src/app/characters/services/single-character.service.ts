import {Injectable} from '@angular/core';
import {ApiProvider} from "../../shared/services/api-provider.service";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {
  singleCharacterInitialState,
  SingleCharacterState
} from "../models/singleCharacterPageModel";




@Injectable({
  providedIn: 'root'
})
export class SingleCharacterService {
  private singleCharacterStateSource = new BehaviorSubject<SingleCharacterState>(singleCharacterInitialState);
  public singleCharacterState$ = this.singleCharacterStateSource.asObservable();

  constructor(
    private apiProvider: ApiProvider,
  ) {  }

  public loadCharacter(id: number) {
    this.updateState({
      isLoading: true,
      isLoaded: false,
    });

    this.apiProvider.loadSingleCharacter(id).pipe(
      tap(() => {
        this.updateState({
          isLoading: false,
          isLoaded: true,
        });
      }),
      catchError((err) => {
        this.updateState({
          isLoading: false,
          isLoaded: true,
        });
        return throwError(() => err)
      })
    )
      .subscribe({
      next: character => {
        this.updateState({
          data: character,
          error: null,
        });
      },
      error: err => {
        this.updateState({
          data: undefined,
          error: err,
        })
      },
    });
  }

  private updateState(newState: Partial<SingleCharacterState>) {
    const currentState = this.singleCharacterStateSource.getValue();
    this.singleCharacterStateSource.next({...currentState, ...newState});
  }

}
