import { Component, h, Prop, State, Watch } from "@stencil/core";

import { store, Unsubscribe } from '@stencil/redux';

import { Point } from "../../modules/data/data";
import {
  coeffsSpec,
  timeSeriesSpec,
} from '../../modules/visualizations/visualizations';

/**
 * Dashboard page.
 */
@Component({
  tag: 'page-dashboard',
  styleUrl: 'dashboard.scss',
})
export class Dashboard {

  /**
   * Specification of the coefficients visualization.
   */
  @State() coeffsSpec: any;

  /**
   * Specification of the time series visualization.
   */
  @State() timeSeriesSpec: any;

  /**
   * Wavelet coefficients.
   */
  @Prop({ mutable: true }) coeffs: number[][];

  /**
   * Interpolated time series data.
   */
  @Prop({ mutable: true }) interpTimeSeries: Point[];

  /**
   * Time series data.
   */
  @Prop({ mutable: true }) timeSeries: Point[];

  /**
   * Unsubscribe from store.
   */
  unsubscribe!: Unsubscribe;

  /**
   * The page is preparing to load.
   */
  componentWillLoad(): void {
    try {
      this.initStore();
    } catch(_) {}
  }

  /**
   * The page did unload.
   */
  disconnectCallback() {
    this.unsubscribe();
  }

  /**
   * Initializes connection to the data backend. 
   */
  initStore(): void {
    this.unsubscribe = store.mapStateToProps(this, state => {
      const coeffs = state.data.coeffs;
      const interpTimeSeries = state.data.interpTimeSeries;
      const timeSeries = state.data.timeSeries;

      return {
        coeffs,
        interpTimeSeries,
        timeSeries,
      };
    });
  }

  /**
   * Updates the specification of the coefficients visualization.
   */
  @Watch('coeffs')
  updateCoeffsSpec(): void {
    this.coeffsSpec = coeffsSpec(this.coeffs);
  }

  /**
   * Updates the specification of the time series visualization.
   */
  @Watch('interpTimeSeries')
  @Watch('timeSeries')
  updateTimeSeriesSpec(): void {
    this.timeSeriesSpec = timeSeriesSpec(
      this.timeSeries,
      this.interpTimeSeries,
      this.coeffs,
    );
  }

  /**
   * Renders the dashboard page.
   */
  render() {
    return (
      <div>
        <h1>COVID-19 Discrete Wavelet Transform Analysis (Germany)</h1>

        {(!this.timeSeries || !this.interpTimeSeries || !this.coeffs)
          ? null
          : <div class='grid'>
              <visualization-container>
                <vega-visualization
                  spacing={200}
                  spec={this.timeSeriesSpec}
                />
              </visualization-container>
              <visualization-container>
                <vega-visualization
                  spacing={100}
                  spec={this.coeffsSpec}
                />
              </visualization-container>
            </div>
        }
      </div>
    );
  }
}