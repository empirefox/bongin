import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IPage, IHeader } from '../core';

@Component({
  selector: 'luck-page-header',
  templateUrl: './page-header.html',
  styleUrls: ['./page-header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuckPageHeader {
  @Input() page: IPage;

  header: IHeader;

  get height() {
    return this.header.height ? this.header.height + 'px' : 'inherit';
  }

  ngOnInit() {
    this.header = this.page.header;
  }

}
