import { Component, Input, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

import { IPage } from '../core';

const gumshoe = require('../../vendors/gumshoe.custom');

@Component({
  selector: 'luck-sidenav',
  templateUrl: './sidenav.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuckSidenavSection implements AfterViewInit, OnDestroy {

  @Input() page: IPage;

  ngAfterViewInit() {
    setTimeout(() => {
      // modified a lot to support this!!!
      gumshoe.init({
        selector: 'div.gumshoe a', // Default link selector (must use a valid CSS selector)
        selectorHeader: null, // Fixed header selector (must use a valid CSS selector)
        sider: 'div.affix-top', // luck-header
        container: window, // The element to spy on scrolling in (must be a valid DOM Node)
        offset: PageScrollConfig.defaultScrollOffset, // Distance in pixels to offset calculations
        activeClass: 'active', // Class to apply to active navigation link and it's parent list item
        callback: function (nav) { } // Callback to run after setting active link
      });
    }, 500);
  }

  ngOnDestroy() {
    // gumshoe.destroy();
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(e) {
  //   if (this.page.showside) {
  //   }
  // }

}
