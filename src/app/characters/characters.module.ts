import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { CharacterCardComponent } from './components/character-card/character-card.component';
import {CharactersRoutingModule} from "./characters-routing.module";
import { CharacterDetailsCardComponent } from './components/character-details-card/character-details-card.component';
import { CharactersContainerComponent } from './pages/characters/characters-container/characters-container.component';



@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterDetailsCardComponent,
    CharactersContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedModule,
    CharactersRoutingModule,
  ]
})
export class CharactersModule { }
