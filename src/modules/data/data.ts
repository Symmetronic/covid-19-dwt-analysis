import linspace from 'exact-linspace';
import interp1 from 'interp1';

export * from './point/point';

import { Point } from './point/point';

/**
 * Path of the data file.
 */
const DATA_PATH: string = './assets/data/data.json';

/**
 * Collection of data related methods.
 */
export class Data {

  /**
   * Returns the data.
   * @return The data.
   */
  static getData(): Promise<Point[]> {
    return fetch(DATA_PATH).then(response => response.json());
  }

  /**
   * Interpolates time series data so it has a length of the next lower power
   * of two.
   * @param  timeSeries Original time series data.
   * @return            Interpolated time series data with a length of the next lower power of two.
   */
  static interpTimeSeries(timeSeries: Point[]): Point[] {
    /* Determine x and y values. */
    let xs: number[] = [];
    let ys: number[] = [];
    for (const point of timeSeries) {
      xs.push(point[0]);
      ys.push(point[1]);
    }

    /* Determine number of sampling points as next higher power of two
     * according to: https://doi.org/10.1080/03610919708813391
     */
    const nrOfSamples: number = Math.pow(2, Math.ceil(Math.log2(xs.length)));

    /* Determine extrema. */
    const min: number = Math.min(...xs);
    const max: number = Math.max(...xs);

    /* Interpolate values. */
    const newXs: number[] = linspace(min, max, nrOfSamples);
    const newYs: number[] = interp1(xs, ys, newXs, 'linear');

    /* Return interpolated time series. */
    return newXs.map((x, index) => [x, newYs[index]]);
  }
}
