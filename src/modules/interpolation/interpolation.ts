import linspace from 'exact-linspace';
import interp1 from 'interp1';

import { Point } from '../data/data';

/**
 * Collection of interpolation-related methods.
 */
export default class Interpolation {
  
  /**
   * Samples values linearly according to the specified number of samples.
   * @param  data        Original data.
   * @param  nrOfSamples Number of sample values.
   * @return             Sampled data.
   */
  static sample(
    data: Point[],
    nrOfSamples: number,
  ): Point[] {
    /* Unzip time series data. */
    const xs: number[] = data.map(point => point[0]);
    const ys: number[] = data.map(point => point[1]);

    /* Determine sample x values. */
    const newXs: number[] = linspace(
      Math.min(...xs),
      Math.max(...xs),
      nrOfSamples
    );

    /* Determine sample y values. */
    const newYs: number[] = interp1(xs, ys, newXs, 'linear');

    /* Zip sample values. */
    const samples: Point[] = newXs.map((x, i) => [x, newYs[i]]);

    /* Return result. */
    return samples;
  }
}
