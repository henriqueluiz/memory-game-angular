import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Routes } from '@enums/routes';
import { GameService } from '@services/game.service';

@Injectable({
  providedIn: 'root'
})
export class VictoryGuard implements CanActivate {
  constructor(
    private readonly gameService: GameService,
    private readonly router: Router
  ) { }

  canActivate(): boolean {
    const isVictory = this.gameService.isVictory();

    if (isVictory) {
      return true;
    }

    this.router.navigate([Routes.HOME]);
    return false;
  }

}
