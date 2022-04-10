import { ButtonSizeClasses } from './../../components/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameService } from '@services/game.service';

@Component({
  selector: 'app-victory',
  templateUrl: './victory.component.html',
  styleUrls: ['./victory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VictoryComponent {
  buttonSize = ButtonSizeClasses.lg;

  constructor(private readonly gameService: GameService) { }

  resetGame() {
    this.gameService.resetGame();
  }
}
