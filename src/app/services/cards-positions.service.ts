import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DEFAULT_CONFIG } from '@config/game.config';

@Injectable({
  providedIn: 'root'
})
export class CardsPositionsService {
  private cardsPositionsSubject$ = new BehaviorSubject<number[]>([]);

  get cardsPositions$(): Observable<number[]> {
    return this.cardsPositionsSubject$.asObservable();
  }

  randomizeCards(): void {
    const shuffledImages = this.getShuffledAllImages();
    const quantityToShow = DEFAULT_CONFIG.quantityToShow;
    const cardsToShow = this.generatePositionsToDisplay(shuffledImages, quantityToShow);

    this.cardsPositionsSubject$.next(cardsToShow);
  }

  private generatePositionsToDisplay(items: number[], quantityToShow: number): number[] {
    const uniqueCards = items.slice(0, quantityToShow);
    const duplicateCards = uniqueCards.concat(uniqueCards);
    return this.shuffle(duplicateCards);
  }

  private getShuffledAllImages() {
    const shuffledImages = Array.from({ length: DEFAULT_CONFIG.totalAvailableImages }, (_, index) => index + 1);
    return this.shuffle(shuffledImages);
  }

  private shuffle(itemsToShuffle: number[]): number[] {
    const newItems = itemsToShuffle.slice();

    for (let i = newItems.length - 1; i > 0; i--) {
      const rand = (Math.floor(Math.random() * (i + 1)));
      const buffer = newItems[i];
      newItems[i] = newItems[rand];
      newItems[rand] = buffer;
    }

    return newItems;
  }
}
