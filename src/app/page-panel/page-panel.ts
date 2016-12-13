import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IPanel } from '../core';

@Component({
  selector: 'luck-panel',
  templateUrl: './page-panel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuckPanel {

  @Input() panel: IPanel;

}
