export const toString = (a: number) => a.toString()
export const toStringRadix = (radix: number) => (a: number) => a.toString(radix)
export const toFixed = (fractionDigit: number) => (val: number) => val.toFixed(fractionDigit)
