import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { LuckBaseSection, BASE_SECTION_INPUTS } from '../page-base-section';
import { COL_CLASSES } from '../layout';

@Component({
  selector: 'luck-masonry-section',
  templateUrl: './masonry.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: BASE_SECTION_INPUTS,
})
export class LuckMasonrySection extends LuckBaseSection implements OnInit {
  options: any;

  ngOnInit() {
    this.options = {
      columnWidth: this.pattern.columnWidth,
      gutter: this.pattern.gutter,
      transitionDuration: this.pattern.transitionDuration,
      resize: this.pattern.resize,
    };
  }

  get layoutClasses() { return COL_CLASSES[this.pattern.cols]; }

}
