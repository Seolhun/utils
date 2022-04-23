import { pipe } from 'fp-ts/function'
import {
  toLower,
  toUpper,
  split,
  head,
  tail,
  match,
  test,
  replace,
  concat
} from '.'

describe('String', () => {
  it('toLower', () => {
    expect(toLower('HELLO')).toBe('hello')
    expect(toLower('hello')).toBe('hello')
  })

  it('toUpper', () => {
    expect(toUpper('HELLO')).toBe('HELLO')
    expect(toUpper('hello')).toBe('HELLO')
  })

  it('split', () => {
    expect(split('')('HELLO')).toStrictEqual(['H', 'E', 'L', 'L', 'O'])
    expect(split('e')('hello')).toStrictEqual(['h', 'llo'])
  })

  it('head', () => {
    expect(
      pipe(
        'HELLO',
        split(''),
        head
      )
    ).toStrictEqual('H')
  })

  it('tail', () => {
    expect(
      pipe(
        'HELLO',
        split(''),
        tail
      )
    ).toStrictEqual('O')
  })

  it('match', () => {
    expect(
      pipe(
        'HelloWorld HelloJS HelloTS',
        match('Hello')
      )?.[0]
    ).toStrictEqual('Hello')
  })

  it('test', () => {
    expect(
      pipe(
        'HelloWorld',
        test(/Hello/)
      )
    ).toBe(true)
    expect(
      pipe(
        'HelloWorld',
        test(/JS/)
      )
    ).toBe(false)
  })

  it('replace', () => {
    expect(
      pipe(
        'HelloWorld',
        replace(/World/)('JS')
      )
    ).toBe('HelloJS')
  })

  it('concat', () => {
    expect(concat('Hello')('JS')).toBe('HelloJS')
  })
})
