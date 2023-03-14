import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from "./characters/pages/characters/characters.component";
import {SingleCharacterComponent} from "./characters/pages/single-character/single-character.component";
import {NotFoundPageComponent} from "./shared/pages/not-found-page/not-found-page.component";

const routes: Routes = [
  {path: "characters", children: [
      {path: '', component: CharactersComponent},
      {path: ':id', component: SingleCharacterComponent},
    ]},
  {path: "not-found", component: NotFoundPageComponent},
  {path: '', redirectTo: "characters", pathMatch:"full"},
  {path: "**", redirectTo: "not-found", pathMatch: "full"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
