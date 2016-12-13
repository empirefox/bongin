import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IPanel } from '../../core';

@Component({
  selector: 'luck-mpanel-panel',
  templateUrl: './mpanel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuckMpanelPanel {

  @Input() panel: IPanel;

  @Output() imgLoad = new EventEmitter<any>();

  // primary success info warning danger
  get panelType(): string {
    return 'panel panel-' + this.panel.Mpanel;
  }

  onImgLoad() { this.imgLoad.next(undefined); }
}
