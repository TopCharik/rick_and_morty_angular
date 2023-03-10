import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Character} from "../../../models/character";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input() characters$!: Observable<Character[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
