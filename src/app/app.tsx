import { Component, h, Prop, Watch } from '@stencil/core';

import { Store } from '@stencil/redux';

import wt from '../modules/wavelet-transform/wavelet-transform';

import {
  Data,
  Point,
} from '../modules/data/data';

import {
  setCoeffs,
  setInterpTimeSeries,
  setTimeSeries,
} from '../redux/actions';
import { RootState } from '../redux/reducers';
import { store } from '../redux/store';

/**
 * Root container of the app.
 */
@Component({
  tag: 'app-root',
  styleUrl: 'app.scss',
})
export class AppRoot {

  /**
   * Method to set the coefficients.
   */
  setCoeffs: typeof setCoeffs = () => {};

  /**
   * Method to set the interpolated time series data.
   */
  setInterpTimeSeries: typeof setInterpTimeSeries = () => {};

  /**
   * Method to set the time series data.
   */
  setTimeSeries: typeof setTimeSeries = () => {};

  /**
   * The wavelet coefficients.
   */
  @Prop({ mutable: true }) coeffs: number[][];

  /**
   * The interpolated time series data.
   */
  @Prop({ mutable: true }) interpTimeSeries: Point[];

  /**
   * Handles changes in the interpolated time series data.
   * @param newValue New interpolated time series value.
   */
  @Watch('interpTimeSeries')
  handleInterpTimeSeries(newValue: Point[]): void {
    /* Determine coefficients. */
    let coeffs: number[][] = null;

    if (newValue) {
      const ys: number[] = newValue.map(val => val[1]);
      coeffs = wt.wavedec(ys, 'haar', 'constant');
    }

    /* Update coefficients. */
    this.setCoeffs(coeffs);
  }

  /**
   * The app's data model.
   */
  @Prop({ context: 'store' }) store: Store<RootState>;

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
    /* Determine interpolated time series. */
    let interpTimeSeries: Point[] = null;

    if (newValue) interpTimeSeries = Data.interpTimeSeries(newValue);

    /* Update interpolated time series. */
    this.setInterpTimeSeries(interpTimeSeries);
  }

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
   * Initializes the app's data backend.
   */
  initStore(): void {
    /* Initializes the store. */
    this.store.setStore(store);

    /* Maps store values to component properties. */
    this.store.mapStateToProps(this, state => {
      const coeffs = state.data.coeffs;
      const interpTimeSeries = state.data.interpTimeSeries;
      const timeSeries = state.data.timeSeries;

      return {
        coeffs,
        interpTimeSeries,
        timeSeries,
      };
    });

    /* Maps actions to properties. */
    this.store.mapDispatchToProps(this, {
      setCoeffs,
      setInterpTimeSeries,
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
    const properties: string[] = ['coeffs', 'interpTimeSeries', 'timeSeries'];

    const steps: number = properties.reduce((steps, property) => {
      return (this[property] === null || this[property] === undefined)
          ? steps
          : steps + 1;
    }, 0);

    return (steps + offset) / (properties.length + offset);
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
          class={(progress < 1) ? null : 'fade-out'}
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
