import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VictoryRoutingModule } from './victory-routing.module';
import { VictoryComponent } from './victory.component';


@NgModule({
  declarations: [
    VictoryComponent
  ],
  imports: [
    CommonModule,
    VictoryRoutingModule
  ]
})
export class VictoryModule { }
