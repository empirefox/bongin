import { ProfileService, ProfileResolver } from './profile';
import { HeadService } from './head';
import { PageService } from './page';
import { MarkdownService } from './md';

export { IProfile, Profiler, ProfileService, ProfileResolver } from './profile';
export { HeadService } from './head';
export {
  IPage, IPanel, ISection, IHeader, ISidenav, Sidenav,
  Masonry, Carousel, Swiper, Featurette,
  initSwiper, initFeaturette,
  PageBase, PageService,
} from './page';
export { Bg, Bgp, BGPS, BGPOS } from './bg';
export { MarkdownService } from './md';
export { featuretteImgtype, panelPattern, mpanelType, faColor, thumbnailType, sectionPattern, sideType } from './share';

export const PUBLIC_PROVIDERS = [
  ProfileResolver,
  ProfileService,
  HeadService,
  PageService,
  MarkdownService,
];
