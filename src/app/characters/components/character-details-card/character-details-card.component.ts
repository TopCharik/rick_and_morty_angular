import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../../models/character";

@Component({
  selector: 'app-character-details-card',
  templateUrl: './character-details-card.component.html',
  styleUrls: ['./character-details-card.component.css']
})
export class CharacterDetailsCardComponent implements OnInit {
  @Input() character!: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
