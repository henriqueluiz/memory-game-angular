import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

type CardAnimation = 'default' | 'flipped';

@Component({
  selector: 'app-card-flip',
  templateUrl: './card-flip.component.html',
  styleUrls: ['./card-flip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('300ms')
      ])
    ])
  ]
})
export class CardFlipComponent implements OnChanges {
  @Input() showBack = false;

  animationState: CardAnimation = 'default';

  ngOnChanges() {
    if (this.showBack === true) {
      this.animationState = 'flipped';
    } else {
      this.animationState = 'default'
    }
  }
}
