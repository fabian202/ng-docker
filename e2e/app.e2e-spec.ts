import { DockerNg2Page } from './app.po';

describe('docker-ng2 App', () => {
  let page: DockerNg2Page;

  beforeEach(() => {
    page = new DockerNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
