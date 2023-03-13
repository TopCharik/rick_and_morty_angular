import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './pages/characters/characters.component';
import { SingleCharacterComponent } from './pages/single-character/single-character.component';
import { CharacterListComponent } from './pages/characters/character-list/character-list.component';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { CharacterCardComponent } from './pages/characters/character-list/character-card/character-card.component';
import { CharactersContainerComponent } from './pages/characters/characters-container/characters-container.component';



@NgModule({
  declarations: [
    CharactersComponent,
    SingleCharacterComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharactersContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedModule
  ]
})
export class CharactersModule { }
