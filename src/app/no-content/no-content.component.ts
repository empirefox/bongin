import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HeadService, IProfile, Profiler } from '../core';

@Component({
  selector: 'no-content',
  templateUrl: './no-content.html',
})
export class NoContentComponent {
  profile: IProfile;

  constructor(
    private route: ActivatedRoute,
    private headService: HeadService) { }

  ngOnInit() {
    let profiler = <Profiler>this.route.snapshot.data;
    this.profile = profiler.profile;
    this.headService.setTitle('Not Found');
  }

}
