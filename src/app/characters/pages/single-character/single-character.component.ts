import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {
  characterId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: res => {
        const id = res["id"];
        if (id === null) throw Error("id not specified");
        this.characterId = id;
      }
    }).unsubscribe();
  }

}
