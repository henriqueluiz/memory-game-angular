import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './with-background.component.html',
  styleUrls: ['./with-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithBackgroundComponent { }
