import { isEmpty, reduce, sort } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import { Ord } from 'fp-ts/number'

export const add = (a: number) => (b: number) => a + b
export const multiply = (a: number) => (b: number) => a * b
export const divide = (a: number) => (b: number) => a / b
export const remainder = (a: number) => (b: number) => a % b
export const squared = (a: number) => (b: number) => a ** b
export const sum = (a: number) => reduce<number, number>(a, (acc, val) => acc + val)
export const average = (values: number[]) => {
  if (isEmpty(values)) {
    return 0
  }
  return pipe(
    values,
    sum(0),
    divide
  )(values.length)
}

export const median = (values: number[]) => {
  if (isEmpty(values)) {
    return 0
  }
  const sorted = pipe(
    values,
    sort(Ord)
  )
  const size = values.length
  const m = pipe(size, divide)(2)
  return pipe(size, remainder)(2) === 1 ? sorted[m | 0] : (sorted[m - 1] + sorted[m]) / 2
}
