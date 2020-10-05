import { Component, h, Prop, Watch } from '@stencil/core';

import { store, Unsubscribe } from '@stencil/redux';

import wt from '../modules/wavelet-transform/wavelet-transform';

import {
  Data,
  Point,
} from '../modules/data/data';

import {
  setCoeffs,
  setTimeSeries,
} from '../redux/actions';
import { initialStore } from '../redux/store';

/**
 * Root container of the app.
 */
@Component({
  tag: 'app-root',
  styleUrl: 'app.scss',
})
export class AppRoot {

  /**
   * The wavelet coefficients.
   */
  @Prop({ mutable: true }) coeffs: number[][];

  /**
   * The time series data.
   */
  @Prop({ mutable: true }) timeSeries: Point[];

  /**
   * Handles changes in the time series data.
   * @param newValue New time series value.
   */
  @Watch('timeSeries')
  handleTimeSeries(newValue: Point[]): void {
    if (!newValue) return;
    
    this.updateCoeffs(newValue);
  }

  /**
   * Method to set the coefficients.
   */
  setCoeffs!: typeof setCoeffs;

  /**
   * Method to set the time series data.
   */
  setTimeSeries!: typeof setTimeSeries;

  /**
   * Unsubscribe from store.
   */
  unsubscribe!: Unsubscribe;

  /**
   * The component is preparing to load.
   */
  componentWillLoad(): void {
    this.initStore();
  }

  /**
   * The component loaded.
   */
  componentDidLoad(): void {
    this.loadData();
  }

  /**
   * The component did unload.
   */
  disconnectCallback() {
    this.unsubscribe();
  }

  /**
   * Initializes the app's data backend.
   */
  initStore(): void {
    /* Initializes the store. */
    store.setStore(initialStore);

    /* Maps store values to component properties. */
    this.unsubscribe = store.mapStateToProps(this, state => {
      const coeffs = state.data.coeffs;
      const timeSeries = state.data.timeSeries;

      return {
        coeffs,
        timeSeries,
      };
    });

    /* Maps actions to properties. */
    store.mapDispatchToProps(this, {
      setCoeffs,
      setTimeSeries,
    });
  }

  /**
   * Loads the time series data.
   * @return Promise that resolves, once the data is loaded.
   */
  async loadData(): Promise<void> {
    return Data.getData().then(timeSeries => this.setTimeSeries(timeSeries));
  }

  /**
   * Determines the current loading progress.
   * @return Progress between 0 and 1.
   */
  progress(): number {
    const offset: number = 1;
    const properties: string[] = ['coeffs', 'timeSeries'];

    const steps: number = properties.reduce((steps, property) => {
      return (this[property] === null || this[property] === undefined)
        ? steps
        : steps + 1;
    }, 0);

    return (steps + offset) / (properties.length + offset);
  }

  /**
   * Updates coefficients.
   * @param timeSeries Time series values.
   */
  updateCoeffs(timeSeries?: Point[]): void {
    if (!this.setCoeffs) return;

    /* Determine coefficients. */
    let coeffs: number[][] = null;

    if (timeSeries) {
      const ys: number[] = timeSeries.map(val => val[1]);
      coeffs = wt.wavedec(ys, 'haar', 'constant');
    }

    /* Update coefficients. */
    this.setCoeffs(coeffs);
  }

  /**
   * Renders the app.
   */
  render() {
    const progress: number = this.progress();

    return (
      <div>
        <github-corner
          href='https://github.com/Symmetronic/covid-19-dwt-analysis/'
        />

        <strc-progress-bar
          progress={progress}
        />

        <div
          class='content'
        >
          <page-dashboard />
        </div>
      </div>
    );
  }
}
