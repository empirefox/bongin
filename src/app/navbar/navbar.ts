import { Component, Input } from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap';
import { IProfile, INav, INavItem, IPage } from '../core';

@Component({
  selector: 'luck-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class LuckNavbar {
  @Input() profile: IProfile;
  @Input() page: IPage;

  nav: INav;
  home: INavItem;
  items: INavItem[];

  isCollapsed: boolean = true;

  ngOnInit() {
    this.nav = this.profile.nav;
    this.home = this.nav.home;
    this.items = this.nav.items;
  }

}
