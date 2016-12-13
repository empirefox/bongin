import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { LuckBaseSection, BASE_SECTION_INPUTS } from '../page-base-section';
import { COL_CLASSES } from '../layout';

@Component({
  selector: 'luck-bricks-section',
  templateUrl: './bricks.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: BASE_SECTION_INPUTS,
})
export class LuckBricksSection extends LuckBaseSection {
  get layoutClasses() {
    return COL_CLASSES[this.pattern.cols];
  }

  onImgLoad() { }
}
