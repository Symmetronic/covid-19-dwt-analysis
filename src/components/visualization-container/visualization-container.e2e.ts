import {
  E2EElement,
  E2EPage,
  newE2EPage,
} from '@stencil/core/testing';

// TODO: Fix test
describe('visualization-container', () => {
  let element: E2EElement;
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<visualization-container />');
    
    element = await page.find('visualization-container');
  });

  describe('rendering', () => {
    it('creates the element', () => {
      expect(element).toHaveClass('hydrated');
    });
  });
});
