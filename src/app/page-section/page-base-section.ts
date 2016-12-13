import { IPanel } from '../core';

export const BASE_SECTION_INPUTS: any[] = ['panels', 'pattern'];

export class LuckBaseSection {

  panels: IPanel[];

  // section.pattern: well, jumbotron, border, carousel
  pattern: any;
}
