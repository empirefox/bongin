import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { ISection, IPanel, PageBase } from '../core';

@Component({
  selector: 'luck-page-section',
  templateUrl: './page-section.html',
  styleUrls: ['./page-section.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuckPageSection implements OnInit {
  @Input() section: ISection;

  panels: IPanel[];

  constructor(private pageBase: PageBase) { }

  ngOnInit() {
    this.panels = this.section.panels;
  }

  get viewClasses() {
    return this.section.hfull ? 'full-container' : (this.pageBase.page.showside ? '' : 'container');
  }

  get sectionPattern() { return this.section[this.section.pattern] || {}; }

  get sectionClasses() { return this.sectionPattern.sectionclass || ''; }

}
