import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameService } from '@services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private readonly gameService: GameService) { }

  resetGame() {
    this.gameService.resetGame();
  }
}
