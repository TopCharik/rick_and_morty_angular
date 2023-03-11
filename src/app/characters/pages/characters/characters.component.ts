import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharactersService} from "../../characters.service";
import {ActivatedRoute, Router} from "@angular/router";
import {mapRouteParamsToCharacterQuery} from "../../helpers/charactersMapper";
import {CharactersQuery} from "../../models/characterQuery";
import {map, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
  private sub!:Subscription;
  nameInput?: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public characterService: CharactersService
  ) {
  }

  ngOnInit(): void {
    this.sub = this.route.queryParams.pipe(
      map(mapRouteParamsToCharacterQuery),
      tap(query => this.nameInput = query.name ?? ""),
    )
      .subscribe({
        next: (query: CharactersQuery) => {
          this.characterService.loadCharacters(query);
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onNameFilter(name: string) {
    const params = this.characterService.currentCharacterParams;
    params.name = name;
    params.page = 1;
    console.log(params);
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
