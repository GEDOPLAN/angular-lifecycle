import { AnguarLifecyclePage } from './app.po';

describe('anguar-lifecycle App', () => {
  let page: AnguarLifecyclePage;

  beforeEach(() => {
    page = new AnguarLifecyclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
