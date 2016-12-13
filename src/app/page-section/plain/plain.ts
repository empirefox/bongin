import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { LuckBaseSection, BASE_SECTION_INPUTS } from '../page-base-section';

@Component({
  selector: 'luck-plain-section',
  templateUrl: './plain.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: BASE_SECTION_INPUTS,
})
export class LuckPlainSection extends LuckBaseSection { }
