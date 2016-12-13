import { IPanel } from './panel';
import { Bg } from '../bg';

export interface Masonry {
  cols: number;
  sectionclass?: string;
  columnWidth?: number;
  gutter?: number;
  transitionDuration?: string;
  resize?: boolean;
  vgutter?: string;
}

export interface Carousel {
  sectionclass?: string;
  interval?: number;
  noTransition?: boolean;
  noPause?: boolean;
  noWrap?: boolean;
}

export interface Swiper {
  slidesPerView?: number;
  loop?: boolean;
  autoplay?: number;
  autoplayDisableOnInteraction?: boolean;
  spaceBetween?: number;
  paging?: boolean;
  arrows?: boolean;
}

export interface ISection {
  id?: string;
  title?: string;
  detail?: string;
  cols: number;
  pattern?: string;
  bg?: Bg;
  hfull?: boolean;
  sideshow?: boolean;

  panels?: IPanel[];

  Carousel?: Carousel;
  Masonry?: Masonry;
  Swiper?: Swiper;

  template: string;
}

export function initSwiper(option: SwiperOptions & Swiper) {
  option.slidesPerView = option.slidesPerView || 1;
  if (option.paging) {
    option.pagination = '.swiper-pagination';
    option.paginationClickable = true;
  }
  if (option.arrows) {
    option.nextButton = '.swiper-button-next';
    option.prevButton = '.swiper-button-prev';
  }
}