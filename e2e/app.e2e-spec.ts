import { RecPage } from './app.po';

describe('rec App', () => {
  let page: RecPage;

  beforeEach(() => {
    page = new RecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
