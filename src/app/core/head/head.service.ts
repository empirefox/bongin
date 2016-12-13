import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { ProfileService } from '../profile';

@Injectable()
export class HeadService {
  private headElement: HTMLElement;

  constructor(
    private titleService: Title,
    private profileService: ProfileService) {
    this.headElement = getDOM().query('head');
    console.log('TODO HeadService:add Browser/Platform support');
  }

  getTitle(): string {
    return this.titleService.getTitle();
  }

  setTitle(newTitle: string) {
    this.profileService.profile.subscribe(profile => {
      this.titleService.setTitle(`${profile.fullcom} - ${newTitle}`);
    });
  }

  setMeta(name: string, content: string) {
    this.getOrCreateMetaElement(name).setAttribute('content', content);
  }

  setFavicons(size: number, href: string) {
    this.getOrCreateFaviconElement(size).setAttribute('href', href);
  }

  setTheme() {
    this.profileService.profile.subscribe(profile => {
      let el: HTMLElement = getDOM().createElement('link');
      el.setAttribute('rel', 'stylesheet');
      el.setAttribute('href', profile.themeUrl);
      let base: HTMLElement = getDOM().query(`base[href]`);
      this.headElement.insertBefore(el, base);
    });
  }

  private getOrCreateFaviconElement(size: number): HTMLElement {
    let ss = `${size}x${size}`;
    let el: HTMLElement;
    el = getDOM().query(`link[rel=icon][type=image/png][size=${ss}]`);
    if (!el) {
      el = getDOM().createElement('link');
      el.setAttribute('rel', 'icon');
      el.setAttribute('type', 'image/png');
      el.setAttribute('size', ss);
      this.headElement.appendChild(el);
    }
    return el;
  }

  private getOrCreateMetaElement(name: string): HTMLElement {
    let el: HTMLElement;
    el = getDOM().query(`meta[name=${name}]`);
    if (!el) {
      el = getDOM().createElement('meta');
      el.setAttribute('name', name);
      this.headElement.appendChild(el);
    }
    return el;
  }
}
