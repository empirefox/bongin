import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { ColorfulBackgroundGenerator } from 'ng2-colorful-input/core/generator';
import { TrianglifyRenderer } from 'ng2-trianglify-input/services/trianglify-renderer.service';

import { Bg, Bgp, BGPOS, BGPS } from '../core';

@Directive({
  selector: '[luckBg]',
})
export class BgDirective {

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef,
    private trianglifyRenderer: TrianglifyRenderer) { }

  @Input() set luckBg(luckBg: Bg) {
    if (luckBg && luckBg.typ) {
      let element = this.elementRef.nativeElement;
      let bg = <string>luckBg[luckBg.typ];
      switch (luckBg.typ) {
        case 'color':
          this.renderer.setElementStyle(element, 'background', bg);
          return;
        case 'colorful':
          this.renderer.setElementStyle(element, 'background', new ColorfulBackgroundGenerator(bg).preview());
          return;
        case 'trianglify':
          setTimeout(_ => this.renderer.setElementStyle(element, 'background', this.trianglifyRenderer.render(element, bg)), 100);
          return;
        case 'pattern':
          this.renderer.setElementStyle(element, 'background', (BGPOS[bg] || <any>{}).url);
          return;
        case 'img':
          this.renderer.setElementStyle(element, 'background', `url(${bg}) no-repeat center`);
          return;
        default:
          return;
      }
    }
  }
}
