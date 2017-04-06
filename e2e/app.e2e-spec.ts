import { NG4.Project.RadiusPage } from './app.po';

describe('ng4.project.radius App', () => {
  let page: NG4.Project.RadiusPage;

  beforeEach(() => {
    page = new NG4.Project.RadiusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
