import {AfterViewInit, Component} from '@angular/core';
import {CharactersService} from "../../characters.service";
import {ActivatedRoute} from "@angular/router";
import {mapRouteParamsToCharacterQuery} from "../../helpers/charactersMapper";
import {CharactersQuery} from "../../models/characterQuery";
import {map} from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements AfterViewInit {


  constructor(
    private route: ActivatedRoute,
    public characterService: CharactersService
  ) {
  }

  ngAfterViewInit(): void {
    this.route.queryParams.pipe(
      map(mapRouteParamsToCharacterQuery),
    )
      .subscribe({
        next: (query:CharactersQuery) => {
          this.characterService.loadCharacters(query);
        }
      });
  }

}
