import { Point } from '../../modules/data/data';

export interface DataAction {
  type: 'SET_COEFFS' | 'SET_INTERP_TIME_SERIES' | 'SET_TIME_SERIES',
  payload: number[][] | Point[]
}

export const setCoeffs = (coeffs: number[][]) => dispatch =>
    dispatch({
      type: 'SET_COEFFS',
      payload: coeffs,
    });

export const setInterpTimeSeries = (interpTimeSeries: Point[]) => dispatch =>
    dispatch({
      type: 'SET_INTERP_TIME_SERIES',
      payload: interpTimeSeries,
    });

export const setTimeSeries = (timeSeries: Point[]) => dispatch =>
    dispatch({
      type: 'SET_TIME_SERIES',
      payload: timeSeries,
    });
