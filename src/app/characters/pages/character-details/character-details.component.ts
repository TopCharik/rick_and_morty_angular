import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharacterDetailsService} from "../../services/character-details.service";
import {map} from "rxjs";
import {CharactersService} from "../../services/characters.service";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  canReturn = false;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    public singleCharacterService: CharacterDetailsService,
  )
  { }

  ngOnInit(): void {

    this.route.params.pipe(
      map(params => params["id"]),
    )
      .subscribe({
        next: id => {
          this.singleCharacterService.loadCharacter(id);
        }
      })
      .unsubscribe();

    this.charactersService.charactersModel$.pipe(
      map(charactersModel => charactersModel.isLoaded)
    )
      .subscribe({
      next: canReturn => this.canReturn = canReturn,
    })
      .unsubscribe();

  }
}
