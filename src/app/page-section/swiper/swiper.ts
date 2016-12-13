import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LuckBaseSection, BASE_SECTION_INPUTS } from '../page-base-section';
import { COL_CLASSES } from '../layout';
import { initSwiper } from '../../core';

@Component({
  selector: 'luck-swiper-section',
  templateUrl: './swiper.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: BASE_SECTION_INPUTS,
})
export class LuckSwiperSection extends LuckBaseSection {
  imgType = '';

  ngOnInit() {
    initSwiper(this.pattern);
  }

}
