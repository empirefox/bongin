import { Bg } from '../bg';
import { ISection } from './section';
import { ISidenav, Sidenav } from './sidenav';

export interface IHeader {
  hide: boolean;
  hfull: boolean;
  height: number;
  body: string;

  bg?: Bg;

  template: string;
}

export interface IPage {
  id?: string;
  name: string;
  icon?: string;
  detail?: string; // in head tag
  pos: number;
  ishome?: boolean;
  navshow?: boolean;
  showside?: boolean;
  bg?: Bg;

  header?: IHeader;
  showheader: boolean;

  sidenav?: ISidenav;
  sider: Sidenav[];

  sections?: ISection[];
}
