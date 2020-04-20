import { newE2EPage } from '@stencil/core/testing';

describe('VegaVisualization', () => {
  let element: HTMLVegaVisualizationElement;
  let page: any;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<vega-visualization />');

    element = await page.find('vega-visualization');
  });

  it('renders', async () => {
    expect(element).not.toBeNull();
  });
});