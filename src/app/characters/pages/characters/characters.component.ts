import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {CharactersService} from "../../characters.service";
import {ActivatedRoute, Router} from "@angular/router";
import {mapRouteParamsToCharacterQuery} from "../../helpers/charactersMapper";
import {CharactersQuery} from "../../models/characterQuery";
import {map, Subscription} from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements AfterViewInit, OnDestroy {
  private subscription!:Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public characterService: CharactersService
  ) {
  }

  ngAfterViewInit(): void {
    this.subscription = this.route.queryParams.pipe(
      map(mapRouteParamsToCharacterQuery),
    )
      .subscribe({
        next: (query:CharactersQuery) => {
          this.characterService.loadCharacters(query);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNameFilter(name: string) {
    const params = this.characterService.currentCharacterParams;
    params.name = name;
    params.page = 1;
    this.router.navigate([], {queryParams: params});
  }

  onNextPage() {
    const params = this.characterService.currentCharacterParams;
    params.page++;

    this.router.navigate([], {queryParams: params});
  }

  onPrevPage() {
    const params = this.characterService.currentCharacterParams;
    params.page--;

    this.router.navigate([], {queryParams: params});
  }
}
