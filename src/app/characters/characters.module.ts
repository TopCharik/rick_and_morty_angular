import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './pages/characters/characters.component';
import { SingleCharacterComponent } from './pages/single-character/single-character.component';
import { CharacterListComponent } from './pages/characters/character-list/character-list.component';



@NgModule({
  declarations: [
    CharactersComponent,
    SingleCharacterComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
