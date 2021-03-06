export interface GameConfig {
  quantityToShow: number;
  miliSecondsToAutoFlip: number;
  totalAvailableImages: number;
  imagesFolder: string;
}

export const DEFAULT_CONFIG: GameConfig = {
  quantityToShow: 5,
  miliSecondsToAutoFlip: 1000,
  totalAvailableImages: 17,
  imagesFolder: 'assets/img/covers'
};
