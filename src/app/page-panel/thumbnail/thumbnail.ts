import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IPanel } from '../../core';

@Component({
  selector: 'luck-thumbnail-panel',
  templateUrl: './thumbnail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuckThumbnailPanel {

  @Input() panel: IPanel;

  @Output() imgLoad = new EventEmitter<any>();

  // img-thumbnail border-none img-rounded img-circle
  get imgType(): string[] { return ['img-responsive', this.panel.Thumbnail]; }

  onImgLoad() { this.imgLoad.next(undefined); }
}
