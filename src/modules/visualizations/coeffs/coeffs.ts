import dwt from 'discrete-wavelets';
import _ from 'lodash';

const COEFF_NUMBER: string = 'Coefficient Number';
const VALUE: string = 'Value';
const REL_CUMUL_ENERGY: string = 'Relative Cumulative Energy';

/**
 * Determines a Vega specification for visualizing coefficients.
 * @param  coeffs Wavelet coefficients.
 * @return        Vega specification for visualizing coefficients.
 */
export function coeffsSpec(coeffs: number[][]): any {
  /* Do nothing, if coefficients are invalid. */
  if (!coeffs) return null;

  /* Transform coefficients */
  const flatCoeffs: number[] = _.flatten(coeffs);
  const totalEnergy: number = dwt.energy(coeffs);

  let transformedCoeffs: any[] = [];
  for (let i: number = 0; i < flatCoeffs.length; i++) {
    const coeff: number = flatCoeffs[i]
    const relCoeffEnergy: number = dwt.energy([coeff]) / totalEnergy;
    const relCumulEnergy: number = (i === 0)
        ? relCoeffEnergy
        : transformedCoeffs[i - 1][REL_CUMUL_ENERGY] + relCoeffEnergy;
    let transformedCoeff: any = {};
    transformedCoeff[COEFF_NUMBER] = i;
    transformedCoeff[VALUE] = coeff;
    transformedCoeff[REL_CUMUL_ENERGY] = relCumulEnergy;
    transformedCoeffs.push(transformedCoeff);
  }

  /* Return Vega specification. */
  return {
    '$schema': 'https://vega.github.io/schema/vega-lite/v4.json',
    data: {
      values: transformedCoeffs,
    },
    vconcat: [
      {
        width: 'container',
        mark: 'bar',
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
            field: COEFF_NUMBER,
            type: 'quantitative',
          },
          y: {
            axis: {
              title: 'Coefficient Value'
            },
            field: VALUE,
            type: 'quantitative',
          },
          tooltip: {
            field: VALUE,
            type: 'quantitative',
          },
        },
      },
      {
        width: 'container',
        mark: 'area',
        encoding: {
          x: {
            field: COEFF_NUMBER,
            type: 'quantitative',
            scale: {
              domain: {
                selection: 'brush',
              },
            },
          },
          y: {
            field: REL_CUMUL_ENERGY,
            type: 'quantitative',
          },
        },
      },
    ]
  };
}
