import { CarSharePage } from './app.po';

describe('car-share App', function() {
  let page: CarSharePage;

  beforeEach(() => {
    page = new CarSharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
