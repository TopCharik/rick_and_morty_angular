import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SingleCharacterService} from "../../services/single-character.service";
import {map} from "rxjs";
import {CharactersQuery} from "../../../shared/models/characterQuery";

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public singleCharacterService: SingleCharacterService)
  { }

  ngOnInit(): void {

    this.route.params.pipe(
      map(params => params["id"]),
    )
      .subscribe({
        next: id => {
          this.singleCharacterService.updateCharacter(id);
        }
      })

  }

  onReturn(params: CharactersQuery) {
    this.router.navigate(["/characters"], {queryParams: params})
  }

}
