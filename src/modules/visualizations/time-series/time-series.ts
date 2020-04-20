import { Point } from "../../data/data";

const X_END: string = 'xEnd';
const X_START: string = 'xStart';
const Y_END: string = 'yEnd';
const Y_START: string = 'yStart';
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
              values: timeSeries.map(point => {
                let value: any = {};
                value[TIME] = new Date(1000 * point[0]);
                value[VALUE] = point[1];
                return value;
              }),
            },
            mark: {
              type: 'point',
              filled: true,
              size: 30,
            },
            encoding: {
              x: {
                field: TIME,
                type: 'temporal',
              },
              y: {
                axis: {
                  title: 'New Infections',
                },
                field: VALUE,
                type: 'quantitative',
              },
            },
          },
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
              type: 'line',
            },
            selection: {
              brush: {
                type: 'interval',
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
            },
          },
        ],
      },
      {
        width: 'container',
        mark: 'rect',
        data: {
          values: coeffs.reverse().reduce((values, level, index) => {
            // TODO: Solve y axis more elegantly
            const yStart: number = Math.pow(2, index);
            const yEnd: number = Math.pow(2, index + 1);
            const scale: number = (maxTime - minTime) / level.length;
            for (let i: number = 0; i < level.length; i++) {
              const coeff: number = level[i];
              let value: any = {};
              value[X_START] = new Date(1000 * (i * scale + minTime));
              value[X_END] = new Date(1000 * ((i + 1) * scale + minTime));
              value[SCALE] = scale;
              value[Y_START] = yStart;
              value[Y_END] = yEnd;
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
                selection: 'brush',
              },
            },
          },
          x2: {
            field: X_END,
          },
          y: {
            // TODO: Period is not 100% comparable to days due to interpolation. Think about how to communicate this!
            axis: {
              title: 'Period',
            },
            field: Y_START,
            type: 'quantitative',
            scale: {
              type: 'log',
              base: 2,
              reverse: true,
            },
          },
          y2: {
            field: Y_END,
          },
          color: {
            field: VALUE,
            type: 'quantitative',
            legend: {
              title: null,
            },
            scale: {
              scheme: 'blueorange',
              domainMid: 0,
              reverse: true,
            },
          },
        }
      }
    ],
  };
}
