import { Point } from "../../data/data";

const X_END: string = 'xEnd';
const X_START: string = 'xStart';
const LEVEL_OF_TRANSFORM = 'Level of Transform'
const SCALE: string = 'Scale';
const TIME: string = 'Time';
const VALUE: string = 'Value';

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

  /* Remove approximation coefficients. */
  coeffs = coeffs.slice(1);

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
              values: interpTimeSeries.map(point => {
                let value: any = {};
                value[TIME] = new Date(1000 * point[0]);
                value[VALUE] = point[1];
                return value;
              }),
            },
            mark: {
              type: 'point',
              filled: true,
              size: 15,
            },
            encoding: {
              x: {
                field: TIME,
                scale: {
                  domain: [
                    1000 * timeSeries[0][0],
                    Date.now(),
                  ]
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
                  ]
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
                axis: {
                  title: '',
                },
                field: TIME,
                type: 'temporal',
              },
              y: {
                field: VALUE,
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
                  event: 'curfew laws',
                  when: new Date(2020, 2, 23, 0, 0, 0, 0),
                },
                {
                  event: '1st deregulations',
                  when: new Date(2020, 3, 20, 0, 0, 0, 0),
                },
                {
                  event: '2nd deregulations',
                  when: new Date(2020, 4, 4, 0, 0, 0, 0),
                },
                {
                  event: '3rd deregulations',
                  when: new Date(2020, 5, 5, 0, 0, 0, 0),
                },
                {
                  event: 'Corona app',
                  when: new Date(2020, 5, 15, 0, 0, 0, 0),
                },
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
          values: coeffs.reverse().reduce((values, level, index) => {
            const scale: number = (maxTime - minTime) / level.length;
            for (let i: number = 0; i < level.length; i++) {
              const coeff: number = level[i];
              let value: any = {};
              value[X_START] = new Date(1000 * (i * scale + minTime));
              value[X_END] = new Date(1000 * ((i + 1) * scale + minTime));
              value[SCALE] = scale;
              value[LEVEL_OF_TRANSFORM] = index + 1;
              value[VALUE] = coeff;
              values.push(value);
            }
            return values;
          }, []),
        },
        encoding: {
          x: {
            axis: {
              title: 'Date',
            },
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
      }
    ],
  };
}
