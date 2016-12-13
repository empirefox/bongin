import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProfile, ProfileService } from '../profile';
import { sideType } from '../share';
import { MarkdownService } from '../md';
import { IPage } from './page';
import { ISidenav, Sidenav } from './sidenav';

@Injectable()
export class PageService {
  pages: Observable<Dict<IPage>> = Observable.of({});

  constructor(
    private http: Http,
    private profileService: ProfileService,
    private markdownService: MarkdownService) { }

  getPage(id: string): Observable<IPage> {
    return Observable.forkJoin(
      this.profileService.profile,
      this.pages,
    ).mergeMap(([profile, pages]) => {
      let page = pages[id];
      return page ? Observable.of(page) : this.http.get(`${profile.MainCdn}page/${id}.json`).map(res => {
        page = res.json();
        page.id = id;
        pages[id] = page;
        let nav = profile.nav.home.id === id ? profile.nav.home : profile.nav.items.find(item => item.id === id);
        Object.assign(page, nav);
        return this.initPage(page);
      });
    }).publishReplay(1).refCount();
  }

  initPage(page: IPage): IPage {
    page.sider = [];
    // showside
    page.showheader = page.header && !page.header.hide;
    if (page.showheader) {
      page.header.template = this.markdownService.render(page.header.body, { docId: page.id });
    }

    // showside
    page.showside = page.showside && page.sidenav && (!!~sideType.indexOf(page.sidenav.typ));
    page.sections.forEach((section, si) => {
      section.id = `p${page.id}s${si}`;

      if (section.detail) {
        section.template = this.markdownService.render(section.detail, { docId: section.id });
      }

      // sider
      let side: Sidenav = {
        id: '#' + section.id,
        title: section.title,
        items: [],
      };
      page.sider.push(side);
      section.panels.forEach((panel, pi) => {
        panel.id = `${section.id}p${pi}`;

        if (panel.body) {
          panel.template = this.markdownService.render(panel.body, { docId: panel.id });
        }

        if (panel.head) {
          side.items.push({
            id: '#' + panel.id,
            title: panel.head,
            items: [],
          });
        }
      });
    });
    return page;
  }

}
