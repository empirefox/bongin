export interface ISidenav {
  typ: string;
}

export interface Sidenav {
  id: string;
  title: string;
  items: Sidenav[];
}
