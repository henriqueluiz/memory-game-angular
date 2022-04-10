import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '@services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  victoryCount$!: Observable<number>;
  errorCount$!: Observable<number>;

  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    this.victoryCount$ = this.gameService.victoryCount$;
    this.errorCount$ = this.gameService.errorCount$;
  }

  resetGame(): void {
    this.gameService.resetGame();
  }
}
