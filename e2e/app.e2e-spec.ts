import { BonginPage } from './app.po';

describe('bongin App', function() {
  let page: BonginPage;

  beforeEach(() => {
    page = new BonginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
