import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharactersService} from "../../services/characters.service";
import {ActivatedRoute, Router} from "@angular/router";
import {mapRouteParamsToCharacterQuery} from "../../../shared/helpers/charactersMapper";
import {map, Subscription, tap} from "rxjs";
import {CharactersQuery} from "../../../shared/models/characterQuery";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
  private sub!:Subscription;
  nameInput?: string;
  private currentQuery!: CharactersQuery;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public characterService: CharactersService,
  ) {  }

  ngOnInit(): void {
    this.sub = this.route.queryParams.pipe(
      map(mapRouteParamsToCharacterQuery),
      tap(query => this.nameInput = query.name),
      tap(query => this.currentQuery = query),
      tap(query => this.characterService.updateCharacters(query))
    )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onNameFilter(name: string) {
    const params = this.currentQuery;
    params.name = name;
    params.page = 1;

    this.router.navigate([], {queryParams: params});
  }

  onNextPage() {
    const params = this.currentQuery;
    params.page++;

    this.router.navigate([], {queryParams: params});
  }

  onPrevPage() {
    const params = this.currentQuery;
    params.page--;

    this.router.navigate([], {queryParams: params});
  }

}
