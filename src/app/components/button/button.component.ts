import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export enum ButtonColorClasses {
  primary = 'btn--primary'
}

export enum ButtonSizeClasses {
  sm = 'btn--sm',
  md = 'btn--md',
  lg = 'btn--lg'
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() colorClass = ButtonColorClasses.primary;
  @Input() sizeClass = ButtonSizeClasses.md;

  @Output() btnClick = new EventEmitter<void>();
}
