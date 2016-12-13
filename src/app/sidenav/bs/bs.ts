import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IPage } from '../../core';

@Component({
  selector: 'luck-sidenav-bs',
  templateUrl: './bs.html',
  styleUrls: ['./bs.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuckSidenavBsSection {

  @Input() page: IPage;

}
