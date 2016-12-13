import { Component, ViewEncapsulation } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

import { HeadService, IProfile, ProfileService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  profile: IProfile;

  constructor(
    private headService: HeadService,
    private profileService: ProfileService) {
    PageScrollConfig.defaultDuration = 300;
    PageScrollConfig.defaultScrollOffset = 60;
  }

  ngOnInit() {
    this.headService.setTheme();
    this.profileService.profile.subscribe(profile => this.profile = profile);
  }

}
