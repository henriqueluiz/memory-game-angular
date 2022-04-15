import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DEFAULT_CONFIG } from '@config/game.config';
import { Card, CardFlipState } from '@models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsPositionsService {
  private cardsPositionsSubject$ = new BehaviorSubject<Card[]>([]);

  get cardsPositions$(): Observable<Card[]> {
    return this.cardsPositionsSubject$.asObservable();
  }

  get cardsPositions(): Card[] {
    return this.cardsPositionsSubject$.value;
  }

  randomizeCards(): void {
    const shuffledCards = this.getShuffledCards();
    const quantityToShow = DEFAULT_CONFIG.quantityToShow;
    const cardsToShow = this.generatePositionsToDisplay(shuffledCards, quantityToShow);

    this.updateCardsPositionsSubject(cardsToShow);
  }

  flipCardByIndex(index: number): void {
    const cards = this.cardsPositions.slice();
    cards[index] = {
      ...cards[index],
      flipped: true
    };

    this.updateCardsPositionsSubject(cards);
  }

  getPendingCards(): Card[] {
    return this.cardsPositions.filter(this.isPending);
  }

  isPending(card: Card): boolean {
    return card.flipped === true && card.success === false;
  }

  resetFlipCards(cardsToUpdate: Card[]): void {
    const card: CardFlipState = {
      flipped: false,
      success: false
    };

    this.bulkUpdate(cardsToUpdate, card);
  }

  successFlipCards(cardsToUpdate: Card[]): void {
    const card: CardFlipState = {
      flipped: true,
      success: true
    };

    this.bulkUpdate(cardsToUpdate, card);
  }

  private bulkUpdate(cardsToUpdate: Card[], card: CardFlipState): void {
    const ids = cardsToUpdate.map(c => c.id);
    const cards = this.cardsPositions.slice();

    ids.forEach(id => {
      const index = cards.findIndex(c => c.id === id && this.isPending(c));
      cards[index] = {
        ...cards[index],
        flipped: card.flipped,
        success: card.success
      };
    });

    this.updateCardsPositionsSubject(cards);
  }

  private updateCardsPositionsSubject(cards: Card[]): void {
    this.cardsPositionsSubject$.next(cards);
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
