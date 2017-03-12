import { PicolojsPage } from './app.po';

describe('picolojs App', function() {
  let page: PicolojsPage;

  beforeEach(() => {
    page = new PicolojsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
