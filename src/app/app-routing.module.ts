import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VictoryGuard } from '@guards/victory.guard';

import { WithBackgroundComponent } from './layouts/with-background/with-background.component';
import { WithBackGroundModule } from './layouts/with-background/with-background.module';

const gameRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/game/game.module').then(m => m.GameModule)
  },
  {
    path: 'victory',
    loadChildren: () => import('./pages/victory/victory.module').then(m => m.VictoryModule),
    canActivate: [VictoryGuard]
  }
];

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'play',
    pathMatch: 'full'
  },
  {
    path: 'play',
    component: WithBackgroundComponent,
    children: [...gameRoutes]
  },
  {
    path: '**',
    redirectTo: 'play'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    WithBackGroundModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
