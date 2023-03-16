import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CharactersState} from "../../../models/charactersPageModel";

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styleUrls: ['./characters-container.component.css']
})
export class CharactersContainerComponent implements OnInit {
  @Input() model?: CharactersState;
  @Output() prevPage = new EventEmitter();
  @Output() nextPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
