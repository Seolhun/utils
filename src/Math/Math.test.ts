import { add, sum, multiply, remainder, squared, divide, average, median } from '.'

describe('Math', () => {
  it('add', () => {
    expect(add(2)(3)).toBe(5)
  })

  it('multiply', () => {
    expect(multiply(2)(3)).toBe(6)
  })

  it('divide', () => {
    expect(divide(4)(2)).toBe(2)
  })

  it('remainder', () => {
    expect(remainder(4)(2)).toBe(0)
    expect(remainder(4)(3)).toBe(1)
    expect(remainder(100)(33)).toBe(1)
  })

  it('squared', () => {
    expect(squared(2)(3)).toBe(8)
  })

  it('sum', () => {
    expect(sum(0)([1, 2, 3])).toBe(6)
  })

  it('average', () => {
    expect(average([])).toBe(0)
    expect(average([5, 10, 15, 20, 40, 100, 200, 10])).toBe(50)
  })

  it('median', () => {
    expect(median([])).toBe(0)
    expect(median([5, 10, 15, 20, 40, 100, 200, 10])).toBe(17.5)
  })
})
