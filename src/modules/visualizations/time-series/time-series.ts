import { Point } from "../../data/data";
import wt from '../../wavelet-transform/wavelet-transform';

const X_END: string = 'xEnd';
const X_START: string = 'xStart';
const LEVEL_OF_TRANSFORM = 'Level of Transform'
const TIME: string = 'Time';
const VALUE: string = 'Value';
const ENERGY: string = 'Energy';

/**
 * Determines a Vega specification for visualizing a time series.
 * @param  timeSeries       Time series data.
 * @param  interpTimeSeries Interpolated time series data.
 * @param  coeffs           Wavelet coefficients.
 * @return                  Vega specification for visualizing a time series.
 */
export function timeSeriesSpec(
  timeSeries: Point[],
  interpTimeSeries: Point[],
  coeffs: number[][],
): any {
  /* Do nothing, if data is invalid. */
  if (!timeSeries || !interpTimeSeries || !coeffs) return null;

  const minTime: number = Math.min(...timeSeries.map(point => point[0]));
  const maxTime: number = Math.max(...timeSeries.map(point => point[0]));
  const range: number = maxTime - minTime;
  const deltaTime: number = range / (timeSeries.length - 1);
  const xScale: number = range + deltaTime;
  const offset: number = minTime - (deltaTime / 2);

  /* Remove approximation coefficients. */
  const reversedDetailCoeffs: number[][] = coeffs.slice(1).reverse();

  /* Return Vega specification. */
  return {
    '$schema': 'https://vega.github.io/schema/vega-lite/v4.json',
    vconcat: [
      {
        autosize: {
          type: 'fit',
          contains: 'padding',
        },
        width: 'container',
        layer: [
          {
            data: {
              values: timeSeries.map(point => {
                let value: any = {};
                value[TIME] = new Date(1000 * point[0]);
                value[VALUE] = point[1];
                return value;
              }),
            },
            mark: {
              type: 'line',
            },
            selection: {
              grid: {
                type: 'interval',
                bind: 'scales',
                encodings: ['x'],
              },
            },
            encoding: {
              x: {
                axis: { title: '' },
                field: TIME,
                scale: {
                  domain: [
                    1000 * timeSeries[0][0],
                    Date.now(),
                  ],
                },
                type: 'temporal',
              },
              y: {
                axis: {
                  title: 'New Infections',
                },
                field: VALUE,
                scale: {
                  domain: [
                    0,
                    4/3 * Math.max(...timeSeries.map(point => point[1])),
                  ],
                },
                type: 'quantitative',
              },
              color: {
                value: '#333',
              },
            },
          },
          {
            data: {
              values: [
                {
                  event: 'lockdown',
                  when: new Date(2020, 2, 23, 0, 0, 0, 0),
                },
                {
                  event: 'deregulations',
                  when: new Date(2020, 3, 20, 0, 0, 0, 0),
                },
                {
                  event: 'Warn-App',
                  when: new Date(2020, 5, 15, 0, 0, 0, 0),
                },
                {
                  event: 'lockdown light',
                  when: new Date(2020, 10, 2, 0, 0, 0, 0),
                },
                {
                  event: 'lockdown',
                  when: new Date(2020, 11, 16, 0, 0, 0, 0),
                },
                {
                  event: 'partial deregulations',
                  when: new Date(2021, 2, 8, 0, 0, 0, 0),
                }
              ],
            },
            encoding: {
              color: {
                legend: null,
                field: 'event',
                type: 'nominal',
              },
              x: {
                field: 'when',
                type: 'temporal',
              },
            },
            layer: [
              {
                mark: {
                  type: 'rule',
                  opacity: 1,
                },
              },
              {
                mark: {
                  align: 'left',
                  dx: 5,
                  fontWeight: 100,
                  type: 'text',
                },
                encoding: {
                  angle: { value: -25 },
                  text: {
                    field: 'event',
                    type: 'nominal',
                  },
                  y: {
                    value: 50,
                  },
                },
              },
            ],
          },
        ],
      },
      {
        width: 'container',
        mark: 'rect',
        data: {
          values: reversedDetailCoeffs.reduce((values, level, index) => {
            const scale: number = xScale / level.length;
            for (let i: number = 0; i < level.length; i++) {
              const coeff: number = level[i];
              let value: any = {};
              value[X_START] = new Date(1000 * (i * scale + offset));
              value[X_END] = new Date(1000 * ((i + 1) * scale + offset));
              value[LEVEL_OF_TRANSFORM] = index + 1;
              value[VALUE] = coeff;
              values.push(value);
            }
            return values;
          }, []),
        },
        encoding: {
          x: {
            axis: { title: '' },
            field: X_START,
            type: 'temporal',
            scale: {
              domain: {
                selection: 'grid',
              },
            },
          },
          x2: {
            field: X_END,
          },
          y: {
            axis: {
              title: 'Level of Transform',
            },
            field: LEVEL_OF_TRANSFORM,
            type: 'ordinal',
          },
          color: {
            field: VALUE,
            type: 'quantitative',
            legend: {
              title: null,
            },
            scale: {
              scheme: 'purplegreen',
              domainMid: 0,
            },
          },
        }
      },
      {
        width: 'container',
        mark: 'line',
        data: {
          values: interpTimeSeries.map((point, index) => {
            let sum: number = 0;
            const maxLevel: number = reversedDetailCoeffs.length;
            for (let i: number = 0; i < maxLevel; i++) {
              const level: number = i + 1;
              const coeffs: number[] = reversedDetailCoeffs[i];
              sum += wt.energy([
                coeffs[Math.floor(index / Math.pow(2, level))]
              ]);
            }
        
            let value: any = {};
            value[TIME] = new Date(1000 * point[0]);
            value[ENERGY] = sum / Math.pow(2, maxLevel);
            return value;
          }),
        },
        encoding: {
          x: {
            axis: { title: 'Date' },
            field: TIME,
            type: 'temporal',
            scale: { domain: { selection: 'grid' } },
          },
          y: {
            axis: { title: 'Cumulative Energy' },
            field: ENERGY,
            type: 'quantitative',
          },
          color: { value: '#333' },
        },
      },
    ],
  };
}
