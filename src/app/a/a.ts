import { Component, Input, Output, HostListener, ElementRef, EventEmitter, OnDestroy, Inject, Optional } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { OnMount } from 'ng-dynamic';
import { PageScrollService, PageScrollInstance, PageScrollUtilService, EasingLogic } from 'ng2-page-scroll';
import URL = require('url-parse');

import { IProfile, Profiler } from '../core';

@Component({
  selector: 'a[luck]',
  template: '<ng-content></ng-content>',
})
export class LuckLinkComponent implements OnMount {
  @Input() href: string;

  @Input() pageScrollOffset: number = null;
  @Input() pageScrollDuration: number = null;
  @Input() pageScrollEasing: EasingLogic = null;
  @Input() pageScrollInterruptible: boolean;
  @Input() pageScroll: string = null;

  @Output() pageScrollFinish: EventEmitter<boolean> = new EventEmitter<boolean>();

  private pageScrollInstance: PageScrollInstance;
  private blank: boolean;
  private profile: IProfile;

  constructor(
    private location: Location,
    public elementRef: ElementRef,
    private pageScrollService: PageScrollService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: any) { }

  dynamicOnMount(attr: Map<string, string>, innerHTML: string, el: any) {
    this.href = attr.get('href');
    this.elementRef.nativeElement.innerHTML = innerHTML;
  }

  ngOnInit() {
    let profiler = <Profiler>this.route.snapshot.data;
    this.profile = profiler.profile;
  }

  ngOnDestroy(): any {
    if (this.pageScrollInstance) {
      this.pageScrollService.stop(this.pageScrollInstance);
    }
    return undefined;
  }

  @HostListener('click')
  onClick(): boolean { // tslint:disable-line:no-unused-variable
    if (!this.href) {
      return false;
    }

    if (this.href.startsWith('#')) {
      this.pageScrollService.start(this.generatePageScrollInstance(this.href));
      return false;
    }

    let origin = new URL(this.router.url);
    let url = new URL(this.href);
    if (!url.host || url.host === origin.host) {
      let hash = url.hash;
      url.hash = url.host = url.protocol = '';
      url.set('origin', '').set('slashes', false);

      if (this.location.isCurrentPathEqualTo(url.pathname, <any>url.query)) {
        if (hash) {
          this.pageScrollService.start(this.generatePageScrollInstance(hash));
        }
        return false;
      }

      this.router.navigateByUrl(url.toString()).then(ok => {
        if (ok && hash) {
          let pageScrollService = this.pageScrollService;
          let instance = this.generatePageScrollInstance(hash);
          setTimeout(_ => pageScrollService.start(instance), 200);
        }
      });
    }

    return false; // to preventDefault()
  }

  private generatePageScrollInstance(target: string | HTMLElement): PageScrollInstance {
    if (PageScrollUtilService.isUndefinedOrNull(this.pageScrollInstance)) {
      this.pageScrollInstance = PageScrollInstance.advancedInstance(
        this.document,
        target,
        null,
        this.pageScroll,
        this.pageScrollOffset,
        this.pageScrollInterruptible,
        this.pageScrollEasing,
        this.pageScrollDuration,
        this.pageScrollFinish
      );
    }
    return this.pageScrollInstance;
  }
}
