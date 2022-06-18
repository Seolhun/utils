import { pipe } from 'fp-ts/function'
import { keys, map } from 'fp-ts/Record'
import { reduce } from 'fp-ts/Array'
import _groupBy from 'lodash/groupBy'

type AggregateFnResultType = number | string | boolean
type AggregateFn = <A>(a: A[]) => unknown | AggregateFnResultType

export interface AggregateSchema {
  [key: string]: AggregateFn
}

export const groupBy = <A>(values: A[], groupKey: keyof A) => {
  return _groupBy<A>(values, groupKey)
}

export const aggregate = <A, B>(groupKey: keyof A, schema: AggregateSchema) => (items: A[]) => {
  const result = {} as B
  const itemGroup = groupBy<A>(items, groupKey)
  return pipe(
    itemGroup,
    keys,
    reduce(result, (acc, groupKey) => {
      const itemGroupValue = itemGroup[groupKey]
      return {
        ...acc,
        [groupKey]: pipe(
          schema,
          map((schemaFn) => schemaFn(itemGroupValue))
        )
      }
    })
  )
}
