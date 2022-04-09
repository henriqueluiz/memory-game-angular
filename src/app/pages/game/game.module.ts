import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardFlipModule } from '@components/card-flip/card-flip.module';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    CardFlipModule
  ]
})
export class GameModule { }
