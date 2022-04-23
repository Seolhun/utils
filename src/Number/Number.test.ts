import { pipe } from 'fp-ts/function'
import {
  toString,
  toStringRadix,
  toFixed
} from '.'

describe('String', () => {
  it('toString', () => {
    expect(pipe(10, toString)).toBe('10')
    expect(pipe(10.125, toString)).toBe('10.125')
  })

  it('toStringRadix', () => {
    expect(pipe(100, toStringRadix(2))).toBe('1100100')
    expect(pipe(99, toStringRadix(16))).toBe('63')
  })

  it('toFixed', () => {
    expect(pipe(10, toFixed(2))).toBe('10.00')
    expect(pipe(10.125, toFixed(5))).toBe('10.12500')
  })
})
