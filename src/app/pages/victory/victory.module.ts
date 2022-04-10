import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '@components/button/button.module';
import { VictoryRoutingModule } from './victory-routing.module';
import { VictoryComponent } from './victory.component';


@NgModule({
  declarations: [
    VictoryComponent
  ],
  imports: [
    CommonModule,
    VictoryRoutingModule,
    ButtonModule
  ]
})
export class VictoryModule { }
