import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DEFAULT_CONFIG } from '@config/game.config';
import { Card } from '@models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsPositionsService {
  private cardsPositionsSubject$ = new BehaviorSubject<Card[]>([]);

  get cardsPositions$(): Observable<Card[]> {
    return this.cardsPositionsSubject$.asObservable();
  }

  randomizeCards(): void {
    const shuffledCards = this.getShuffledCards();
    const quantityToShow = DEFAULT_CONFIG.quantityToShow;
    const cardsToShow = this.generatePositionsToDisplay(shuffledCards, quantityToShow);

    this.cardsPositionsSubject$.next(cardsToShow);
  }

  private generatePositionsToDisplay(items: Card[], quantityToShow: number): Card[] {
    const firstsCardsToDisplay = items.slice(0, quantityToShow);
    const duplicateCards = firstsCardsToDisplay.concat(firstsCardsToDisplay);
    return this.shuffle(duplicateCards);
  }

  private getShuffledCards(): Card[] {
    const length = DEFAULT_CONFIG.totalAvailableImages;
    const shuffledCards: Card[] = Array.from({ length }, this.createNewCard);
    return this.shuffle(shuffledCards);
  }

  private shuffle(itemsToShuffle: Card[]): Card[] {
    const newItems = itemsToShuffle.slice();

    for (let i = newItems.length - 1; i > 0; i--) {
      const rand = (Math.floor(Math.random() * (i + 1)));
      const buffer = newItems[i];
      newItems[i] = newItems[rand];
      newItems[rand] = buffer;
    }

    return newItems;
  }

  private createNewCard(_: any, index: number): Card {
    return {
      id: index + 1,
      flipped: false,
      success: false
    };
  }
}
