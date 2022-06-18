export const toLower = (s: string) => s.toLocaleLowerCase()
export const toUpper = (s: string) => s.toLocaleUpperCase()
export const split = (search: string | RegExp) => (s: string) => s.split(search)
export const head = <T>(arr: T[]): T => arr[0]
export const tail = <T>(arr: T[]): T => arr[arr.length - 1]

export const match = (what: string | RegExp) => (s: string) => s.match(what)
export const test = (what: RegExp) => (s: string) => what.test(s)
export const replace = (search: string | RegExp) => (replace: string) => (s: string) => s.replace(search, replace)

export const concat = (a: string) => (b: string) => a + b
