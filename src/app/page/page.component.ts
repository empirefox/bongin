import { Component, OnInit, forwardRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HeadService, IPage, PageBase, PageService, IProfile, Profiler } from '../core';

const provideParent = (component: any, parentType?: any) => {
  return { provide: parentType || PageBase, useExisting: forwardRef(() => component) };
};

@Component({
  selector: 'luck-page',
  templateUrl: './page.html',
  providers: [provideParent(LuckPage)],
})
export class LuckPage implements PageBase, OnInit {
  profile: IProfile;
  page: IPage;
  noContent: boolean;

  constructor(
    private headService: HeadService,
    private pageService: PageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let profiler = <Profiler>this.route.snapshot.data;
    this.profile = profiler.profile;

    this.route.data.forEach(data => {
      let ishome = data['home'];
      if (ishome) {
        this.setPage(this.profile.nav.home.id);
      }
    });
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      if (id) {
        this.setPage(id);
      }
    });
  }

  setPage(id: string) {
    this.noContent = false;
    this.pageService.getPage(id).subscribe(
      page => {
        this.page = page;
        this.headService.setTitle(page.name);
      },
      _ => this.noContent = true,
    );
  }

}
