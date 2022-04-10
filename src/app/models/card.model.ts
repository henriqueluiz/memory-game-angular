export interface Card {
  id: number;
  flipped: boolean;
  success: boolean;
}

export type CardFlipState = Pick<Card, 'flipped' | 'success'>;
