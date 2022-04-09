import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DEFAULT_CONFIG } from '@config/game.config';
import { CardsPositionsService } from '@services/cards-positions.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
  cardsPositions$!: Observable<number[]>;

  constructor(private readonly cardsPositionsService: CardsPositionsService) { }

  ngOnInit() {
    this.cardsPositions$ = this.cardsPositionsService.cardsPositions$;
    this.cardsPositionsService.randomizeCards();
  }

  getCardBackStyle(card: number) {
    return {
      'background-image': `url(${this.getImageUrl(card)})`
    };
  }

  private getImageUrl(card: number) {
    return `${DEFAULT_CONFIG.coversFolder}/${card}.jpg`;
  }
}
