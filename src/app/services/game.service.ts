import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_CONFIG } from '@config/game.config';
import { Card } from '@models/card.model';
import { Routes } from '@enums/routes';
import { CardsPositionsService } from './cards-positions.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly maxPendingCardsFlipped = 2;

  constructor(
    private readonly positionsService: CardsPositionsService,
    private readonly router: Router
  ) { }

  setFlipped(index: number): void {
    this.flipCardByIndex(index);
  }

  resetGame(): void {
    this.positionsService.randomizeCards();
    this.router.navigate([Routes.HOME]);
  }

  isVictory(): boolean {
    return this.positionsService.cardsPositions.length > 0
      ? this.positionsService.cardsPositions.every(c => c.success)
      : false;
  }

  private flipCardByIndex(index: number): void {
    const canUpdate = this.canUpdate();

    if (!canUpdate) return;

    this.positionsService.flipCardByIndex(index);
    this.verifyMove();
  }

  private canUpdate(): boolean {
    const totalPendingCards = this.positionsService.getPendingCards().length;
    return totalPendingCards < this.maxPendingCardsFlipped;
  }

  private verifyMove(): void {
    const pendingCards = this.positionsService.getPendingCards();
    const canVerify = pendingCards.length === this.maxPendingCardsFlipped;

    if (!canVerify) return;

    const [cardOne, cardTwo] = pendingCards;
    const isCorrectMove = cardOne.id === cardTwo.id;

    if (isCorrectMove) {
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
    this.verifyVictory();
  }

  private verifyVictory() {
    const isVictory = this.isVictory();

    if (isVictory) {
      setTimeout(() => {
        this.router.navigate([Routes.VICTORY]);
      }, DEFAULT_CONFIG.miliSecondsToAutoFlip / 2);
    }
  }
}
