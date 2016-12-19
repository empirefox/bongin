import { featuretteImgtype } from '../share';

export interface Featurette {
  imgtype?: string;
  imgcols?: number;
  revert?: boolean;
}

export interface IPanel {
  id?: string;
  head?: string;
  body: string;
  foot?: string;
  bodyid?: string;
  img?: string;
  pattern: string;
  bg?: string;
  txtalign?: string;

  Mpanel?: string;
  Thumbnail?: string;
  Featurette?: Featurette;

  template: string;
}

// can only be called once
export const initFeaturette = (pattern: Featurette): Featurette => {
  let css = Object.assign({}, pattern);
  css.imgcols = css.imgcols || 5;
  css.imgtype = featuretteImgtype[css.imgtype] || featuretteImgtype[0];
  return css;
};
