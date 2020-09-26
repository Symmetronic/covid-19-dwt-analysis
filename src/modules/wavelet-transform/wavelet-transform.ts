import wt, {
  PaddingMode,
  Wavelet,
} from 'discrete-wavelets';

/**
 * Adapter class for wavelet transform dependency.
 */
export default class WaveletTransform {

  /**
   * Calculates the energy of values.
   * @param  values Input values.
   * @return        Energy of input values.
   */
  static energy(values: number[] | number[][]): number {
    return wt.energy(values);
  }

  /**
   * 1D wavelet decomposition.
   * @param  data    Input data.
   * @param  wavelet Wavelet to use.
   * @param  mode    Signal extension mode.
   * @return         Wavelet coefficients.
   */
  static wavedec(
    data: number[],
    wavelet: Wavelet,
    mode?: PaddingMode,
  ): number[][] {
    return wt.wavedec(data, wavelet, mode);
  }
}
