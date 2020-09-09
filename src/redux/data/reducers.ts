import { DataAction } from './actions';

import { Point } from '../../modules/data/data';

export type DataState = {
  coeffs: number[][],
  timeSeries: Point[],
};

/**
 * Data reducer.
 * @param  state  Current data state.
 * @param  action Action that may change the state.
 * @return        New data state.
 */
export const data = (
  state: DataState = {
    coeffs: null,
    timeSeries: null,
  },
  action: DataAction,
): DataState => {
  switch (action.type) {
    case 'SET_COEFFS': {
      const coeffs: number[][] = action.payload as number[][];
      return {
        ...state,
        coeffs,
      };
    }
    case 'SET_TIME_SERIES': {
      const timeSeries: Point[] = action.payload as Point[];
      return {
        ...state,
        timeSeries,
      };
    }
    default: {
      return state;
    }
  }
}
