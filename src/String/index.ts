import { reduceRight } from 'fp-ts/lib/Array'

export const match = (what: string | RegExp) => (s: string) => s.match(what)
export const replace = (search: string | RegExp) => (replace: string) => (s: string) => s.replace(search, replace)
export const toString = (a: number) => a.toString()
export const split = (search: string | RegExp) => (s: string) => s.split(search)
export const toLower = (s: string) => s.toLocaleLowerCase()
export const head = <T>(arr: T[]): T => arr[0]
export const concat = (a: string) => (b: string) => a + b
export const inverse = (a: string) => reduceRight<string, string>(a, (acc, val) => acc + val)
