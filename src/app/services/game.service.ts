import { Injectable } from '@angular/core';
import { DEFAULT_CONFIG } from '@config/game.config';
import { Card } from '@models/card.model';
import { CardsPositionsService } from './cards-positions.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly maxPendingCardsFlipped = 2;

  constructor(private readonly positionsService: CardsPositionsService) { }

  setFlipped(index: number): void {
    this.flipCardByIndex(index);
  }

  private flipCardByIndex(index: number): void {
    const canUpdate = this.canUpdate();

    if (!canUpdate) return;

    this.positionsService.flipCardByIndex(index);
    this.verifyVictory();
  }

  private canUpdate(): boolean {
    const totalPendingCards = this.positionsService.getPendingCards().length;
    return totalPendingCards < this.maxPendingCardsFlipped;
  }

  private verifyVictory(): void {
    const pendingCards = this.positionsService.getPendingCards();
    const canVerify = pendingCards.length === this.maxPendingCardsFlipped;

    if (!canVerify) return;

    const [cardOne, cardTwo] = pendingCards;
    const isVictory = cardOne.id === cardTwo.id;

    if (isVictory) {
      this.successFlipCards(pendingCards);
    } else {
      this.resetFlipCards(pendingCards);
    }
  }

  private resetFlipCards(pendingCards: Card[]): void {
    setTimeout(() => {
      this.positionsService.resetFlipCards(pendingCards);
    }, DEFAULT_CONFIG.miliSecondsToAutoFlip);
  }

  private successFlipCards(pendingCards: Card[]): void {
    this.positionsService.successFlipCards(pendingCards);
  }
}
