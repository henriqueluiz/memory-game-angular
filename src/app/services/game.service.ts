import { BehaviorSubject, Observable } from 'rxjs';
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
  private victoryCountSubject$ = new BehaviorSubject<number>(0);
  private errorCountSubject$ = new BehaviorSubject<number>(0);

  constructor(
    private readonly positionsService: CardsPositionsService,
    private readonly router: Router
  ) { }

  get victoryCount$(): Observable<number> {
    return this.victoryCountSubject$.asObservable();
  }

  get errorCount$(): Observable<number> {
    return this.errorCountSubject$.asObservable();
  }

  setFlipped(index: number): void {
    this.flipCardByIndex(index);
  }

  resetGame(): void {
    this.positionsService.randomizeCards();
    this.resetErrorCount();
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
      this.incrementErrorCount();
    }, DEFAULT_CONFIG.miliSecondsToAutoFlip);
  }

  private successFlipCards(pendingCards: Card[]): void {
    this.positionsService.successFlipCards(pendingCards);
    this.verifyVictory();
  }

  private verifyVictory() {
    const isVictory = this.isVictory();

    if (isVictory) {
      this.redirectToVictoryPage();
    }
  }

  private redirectToVictoryPage() {
    setTimeout(() => {
      this.incrementVictoryCount();
      this.router.navigate([Routes.VICTORY]);
    }, DEFAULT_CONFIG.miliSecondsToAutoFlip / 2);
  }

  private resetErrorCount() {
    this.errorCountSubject$.next(0);
  }

  private incrementErrorCount() {
    const errors = this.errorCountSubject$.value;
    const increment = errors + 1;

    this.errorCountSubject$.next(increment);
  }

  private incrementVictoryCount() {
    const victories = this.victoryCountSubject$.value;
    const increment = victories + 1;

    this.victoryCountSubject$.next(increment);
  }
}
