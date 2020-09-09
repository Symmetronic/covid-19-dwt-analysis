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
}
