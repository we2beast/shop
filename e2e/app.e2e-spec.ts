import { Shop.LocalPage } from './app.po';

describe('shop.local App', () => {
  let page: Shop.LocalPage;

  beforeEach(() => {
    page = new Shop.LocalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
