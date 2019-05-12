import { AulaDiaTrezPage } from './app.po';

describe('aula-dia-trez App', function() {
  let page: AulaDiaTrezPage;

  beforeEach(() => {
    page = new AulaDiaTrezPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
