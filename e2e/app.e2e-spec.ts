import { ScrumFrontendPage } from './app.po';

describe('scrum-frontend App', () => {
  let page: ScrumFrontendPage;

  beforeEach(() => {
    page = new ScrumFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
