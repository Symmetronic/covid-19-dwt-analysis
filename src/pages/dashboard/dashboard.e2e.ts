import {
  E2EElement,
  E2EPage,
  newE2EPage,
} from '@stencil/core/testing';

describe('page-dashboard', () => {
  let element: E2EElement;
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({ url: '/' });

    element = await page.find('page-dashboard');
  });

  describe('rendering', () => {
    it('creates the element', () => {
      expect(element).toHaveClass('hydrated');
    });
  });
});
