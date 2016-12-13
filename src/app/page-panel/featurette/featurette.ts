import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef } from '@angular/core';

import { IPanel, initFeaturette, Featurette } from '../../core';

@Component({
  selector: 'luck-featurette-panel',
  templateUrl: './featurette.html',
  styleUrls: ['./featurette.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuckFeaturettePanel {

  @Input() panel: IPanel;

  @Output() imgLoad = new EventEmitter<any>();

  _css: Featurette;

  txtMarginTop: number;

  constructor(private elementRef: ElementRef) { }

  // {imgtype, imgcols, revert}
  get css() {
    if (!this._css) {
      this._css = initFeaturette(this.panel.Featurette);
    }
    return this._css;
  }

  // rounded circle thumbnail
  get imgType() {
    return this.css.imgtype ?
      `img-featurette img-responsive img-${this.css.imgtype}` :
      'img-featurette img-responsive';
  }

  get imgClasses() {
    let c = `col-sm-${this.css.imgcols}`;
    let n = `col-sm-push-${12 - this.css.imgcols}`;
    return {
      'img-content': true,
      [c]: true,
      [n]: !this.css.revert,
    };
  }

  get txtClasses() {
    let c = `col-sm-${12 - this.css.imgcols}`;
    let n = `col-sm-pull-${this.css.imgcols}`;
    return {
      'txt-content': true,
      [c]: true,
      [n]: !this.css.revert,
    };
  }

  onThisImgLoad(event) {
    let txt = this.elementRef.nativeElement.children[0].children[0].children[1];
    this.txtMarginTop = (event.target.height - txt.offsetHeight) / 2;
    this.imgLoad.next(undefined);
  }

}
