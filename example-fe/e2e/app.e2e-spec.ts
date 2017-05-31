import { ExampleFePage } from './app.po';

describe('example-fe App', () => {
  let page: ExampleFePage;

  beforeEach(() => {
    page = new ExampleFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
