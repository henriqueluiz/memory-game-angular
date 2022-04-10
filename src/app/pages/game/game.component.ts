import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DEFAULT_CONFIG } from '@config/game.config';
import { CardsPositionsService } from '@services/cards-positions.service';
import { Card } from '@models/card.model';
import { GameService } from '@services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
  cardsPositions$!: Observable<Card[]>;

  constructor(
    private readonly cardsPositionsService: CardsPositionsService,
    private readonly gameService: GameService
  ) { }

  ngOnInit() {
    this.cardsPositions$ = this.cardsPositionsService.cardsPositions$;
    this.cardsPositionsService.randomizeCards();
  }

  setFlipped(index: number) {
    this.gameService.setFlipped(index);
  }

  getCardBackStyle(card: Card) {
    const backgroundImage = `url(${this.getImageUrl(card.id)})`;

    return {
      'background-image': backgroundImage
    };
  }

  trackByCardId(index: number, item: Card){
    return item.id;
  }

  private getImageUrl(id: number) {
    return `${DEFAULT_CONFIG.imagesFolder}/${id}.jpg`;
  }
}
