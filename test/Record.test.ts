import * as Record from 'fp-ts/Record'
import { Magma } from 'fp-ts/Magma'
import { option, either } from 'fp-ts'

describe('Map', () => {
  it('compact', () => {
    const expected = Record.compact({
      a: option.some('foo'),
      b: option.none,
      c: option.some('bar')
    })
    expect(expected).toEqual({
      a: 'foo',
      c: 'bar'
    })
  })

  it('union', () => {
    const m1: Magma<number> = {
      concat: (x: number, y: number) => x + y
    }
    const expected = Record.union(m1)({ a: 3, c: 3 })({ a: 1, b: 2 })
    expect(expected).toEqual({ a: 4, b: 2, c: 3 })
  })

  it('intersection', () => {
    const m1: Magma<number> = {
      concat: (x: number, y: number) => x + y
    }
    const expected = Record.intersection(m1)({ a: 3, c: 3 })({ a: 1, b: 2 })
    expect(expected).toEqual({ a: 4 })
  })

  it('separate', () => {
    const expected = Record.separate({
      a: either.right('foo'),
      b: either.left('bar'),
      c: either.right('baz')
    })
    expect(expected).toEqual({
      right: {
        a: 'foo',
        c: 'baz'
      },
      left: {
        b: 'bar'
      }
    })
  })

  it('filter', () => {
    const expected = Record.filter((s: string) => s.length < 4)({
      a: '12',
      b: '123',
      c: '1234'
    })
    expect(expected).toEqual({
      a: '12',
      b: '123'
    })
  })
})
