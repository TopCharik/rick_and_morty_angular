import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './pages/characters/characters.component';
import { SingleCharacterComponent } from './pages/single-character/single-character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { SingleCharacterCardComponent } from './components/single-character-card/single-character-card.component';
import {CharactersRoutingModule} from "./characters-routing.module";



@NgModule({
  declarations: [
    CharactersComponent,
    SingleCharacterComponent,
    CharacterListComponent,
    CharacterCardComponent,
    SingleCharacterCardComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedModule,
    CharactersRoutingModule,
  ]
})
export class CharactersModule { }
