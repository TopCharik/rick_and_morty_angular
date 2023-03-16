import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {CharactersComponent} from "./pages/characters/characters.component";
import {CharacterDetailsComponent} from "./pages/character-details/character-details.component";


const routes: Routes = [
  {path: "", component: CharactersComponent},
  {path: ":id", component: CharacterDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CharactersRoutingModule { }
