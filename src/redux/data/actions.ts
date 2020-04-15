import { Action } from '@stencil/redux';

import { Point } from '../../modules/data/data';

export interface DataAction {
  type: 'SET_COEFFS' | 'SET_INTERP_TIME_SERIES' | 'SET_TIME_SERIES',
  payload: number[][] | Point[]
}

export const setCoeffs: Action = (coeffs: number[][]) => dispatch =>
    dispatch({
      type: 'SET_COEFFS',
      payload: coeffs,
    });

export const setInterpTimeSeries: Action = (timeSeries: Point[]) => dispatch =>
    dispatch({
      type: 'SET_INTERP_TIME_SERIES',
      payload: timeSeries,
    });

export const setTimeSeries: Action = (timeSeries: Point[]) => dispatch =>
    dispatch({
      type: 'SET_TIME_SERIES',
      payload: timeSeries,
    });
