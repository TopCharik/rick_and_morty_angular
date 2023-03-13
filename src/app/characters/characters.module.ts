import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './pages/characters/characters.component';
import { SingleCharacterComponent } from './pages/single-character/single-character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { CharacterCardComponent } from './components/character-card/character-card.component';



@NgModule({
  declarations: [
    CharactersComponent,
    SingleCharacterComponent,
    CharacterListComponent,
    CharacterCardComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedModule
  ]
})
export class CharactersModule { }
