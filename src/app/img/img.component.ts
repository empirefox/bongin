import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'luck-img',
  templateUrl: './img.html',
})
export class LuckImgComponent {
  @Input() link: string;
  @Input() src: string;
  @Input() clazz: string;

  @Output() load = new EventEmitter<any>();

}
