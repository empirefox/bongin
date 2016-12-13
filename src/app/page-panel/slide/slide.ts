import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { IPanel } from '../../core';

@Component({
  selector: 'luck-slide-panel',
  templateUrl: './slide.html',
  styleUrls: ['./slide.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuckSlidePanel {
  @Input() panel: IPanel;

  imgclass = 'slide-img';
}
