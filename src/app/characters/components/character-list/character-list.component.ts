import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../../shared/models/character";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input() characters?: Character[];

  constructor() { }

  ngOnInit(): void {
  }

}
