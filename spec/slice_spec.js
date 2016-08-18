import { slice } from '../lib/slice'

describe('slice', () => {
  it ('Computes the slice of the values in array', () => {
    expect ( slice([4, 6, 8, 2])).toEqual(20)
  })
})
