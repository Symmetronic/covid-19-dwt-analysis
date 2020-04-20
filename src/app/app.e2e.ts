import {
  E2EElement,
  E2EPage,
  newE2EPage,
} from '@stencil/core/testing';

describe('app-root', () => {
  let element: E2EElement;
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({ url: '/' });
    
    element = await page.find('app-root');
  });

  describe('rendering', () => {
    it('creates the element', () => {
      expect(element).toHaveClass('hydrated');
    });
  });
});
