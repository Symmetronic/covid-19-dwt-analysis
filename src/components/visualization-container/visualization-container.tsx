import { Component, h } from "@stencil/core";

/**
 * Visualization container component.
 */
@Component({
  tag: 'visualization-container',
  styleUrl: 'visualization-container.scss',
  shadow: true,
})
export class VisualizationContainer {

  /**
   * Renders the visualization container.
   */
  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}