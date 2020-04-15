import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';

import vegaEmbed from 'vega-embed';

/**
 * An interactive visualization.
 */
@Component({
  tag: 'vega-visualization',
  styleUrl: 'vega-visualization.scss',
})
export class VegaVisualization {

  /**
   * The element itself.
   */
  @Element() el: HTMLVegaVisualizationElement;

  /**
   * Spacing in pixels to apply in order to fit plot exactly.
   */
  @Prop() spacing: number;

  /**
   * The specification of the visualization.
   */
  @Prop() spec: any;

  /**
   * The component loaded.
   */
  componentDidLoad(): void {
    this.update();
  }

  /**
   * Updates the visualization.
   */
  @Watch('spec')
  update(): void {
    /* Do nothing, if no specification is given. */
    if (!this.spec) return;
    
    /* Create visualization. */
    const el: HTMLElement = this.el.querySelector('div');
    vegaEmbed(el, this.spec, {
      actions: false,
    }).catch(error => console.error(error));
  }

  /**
   * Renders the visualization
   */
  render() {
    return (
      <Host
        style={{
          paddingRight: this.spacing + 'px',
        }}
      >
        <div>
        </div>
      </Host>
    );
  }
}
