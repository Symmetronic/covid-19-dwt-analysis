import { newE2EPage } from '@stencil/core/testing';

// TODO: Fix test
describe('GitHubCorner', () => {
  let element: HTMLGithubCornerElement;
  let page: any;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<github-corner />');

    element = await page.find('github-corner');
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });
});