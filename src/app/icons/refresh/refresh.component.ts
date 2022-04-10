import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefreshComponent { }
