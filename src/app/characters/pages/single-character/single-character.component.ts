import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CharactersService} from "../../characters.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Character} from "../../models/character";

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {
  character!: Character;

  constructor(private route: ActivatedRoute, private router: Router,public characterService: CharactersService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: res => {
        const id = res["id"];
        this.characterService.getSingleCharacter(id).subscribe({
          next: character => this.character = character,
          error: (err: HttpErrorResponse) =>  this.router.navigate(["/not-found"]),
        })
      }
    }).unsubscribe();
  }

  onReturn() {
    const params = this.characterService.currentCharacterParams ?? {};
    this.router.navigate(["/characters"], {queryParams: params})
  }

}
