import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundPageComponent} from "./shared/pages/not-found-page/not-found-page.component";

const routes: Routes = [
  {path: "characters", loadChildren: () => import("./characters/characters.module").then(mod => mod.CharactersModule)},
  {path: "not-found", component: NotFoundPageComponent},
  {path: '', redirectTo: "characters", pathMatch:"full"},
  {path: "**", redirectTo: "not-found", pathMatch: "full"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
