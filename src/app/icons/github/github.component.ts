import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubComponent { }
