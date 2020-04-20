import { newE2EPage } from '@stencil/core/testing';

// TODO: Fix test
describe('VegaVisualization', () => {
  let element: HTMLVegaVisualizationElement;
  let page: any;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<vega-visualization />');

    element = await page.find('vega-visualization');
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });
});