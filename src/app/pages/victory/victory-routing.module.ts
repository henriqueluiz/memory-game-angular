import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VictoryComponent } from './victory.component';

const routes: Routes = [
  {
    path: '',
    component: VictoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VictoryRoutingModule { }
