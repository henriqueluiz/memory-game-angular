import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-flip',
  templateUrl: './card-flip.component.html',
  styleUrls: ['./card-flip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFlipComponent {
  @Input() showBack = false;
}
