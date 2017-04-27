import { HallOfHeroesPage } from './app.po';

describe('hall-of-heroes App', function() {
  let page: HallOfHeroesPage;

  beforeEach(() => {
    page = new HallOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
