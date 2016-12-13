export interface ISite {
  MainCdn: string;
  Phone: string;
  Email: string;
  CreatedAt: number;
  Expires: number;
}

export interface INavItem {
  id: string;
  name: string;
  icon?: string;
  navshow: boolean;
}

export interface INav {
  maxlength?: number;
  showicon?: boolean;
  incontainer?: boolean;
  reverse?: boolean;
  large?: boolean;
  home: INavItem;
  items: INavItem[];
}

export interface IProfile extends ISite {
  themeUrl: string;
  fullcom: string;
  shortcom: string;
  title: string;
  detail: string;
  keywords: string;
  addr?: string;
  imgaddr?: string;
  logo?: string;
  ico16?: string;
  ico32?: string;
  ico64?: string;

  nav?: INav;
}
