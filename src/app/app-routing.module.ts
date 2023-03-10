import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from "./characters/pages/characters/characters.component";
import {SingleCharacterComponent} from "./characters/pages/single-character/single-character.component";
import {NotFoundComponent} from "./shared/pages/not-found/not-found.component";

const routes: Routes = [
  {path: "characters", children: [
      {path: '', component: CharactersComponent},
      {path: ':id', component: SingleCharacterComponent},
    ]},
  {path: "not-found", component: NotFoundComponent},
  {path: "**", redirectTo: "/characters", pathMatch: "full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
