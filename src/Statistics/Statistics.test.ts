import { pipe } from 'fp-ts/function'
import { map } from 'fp-ts/Array'
import _get from 'lodash/get'

import * as Dummy from './Statistics.dummy'
import {
  sum
} from '../Math'
import {
  aggregate
} from '.'

describe('Statistics', () => {
  it('toLower', () => {
    const expected = pipe(
      Dummy.items(1000),
      aggregate('uk', {
        sum: (values) => pipe(
          values,
          map((value) => _get(value, 'item.price', 0)),
          sum(0)
        )
      })
    )
    expect(expected).toEqual(null)
  })
})
