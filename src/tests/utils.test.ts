import '@testing-library/jest-dom'
import { getUniqueCount } from '../utils/array-utils'

describe('Utils Test', () => {
  it('Should return a unique list of items', () => {
    const source = ['Avatar', 'Star Wars', 'Pirates', 'Avatar', 'Spectre', 'Dark Knight', 'Star Wars']
    const unique = getUniqueCount(source)
    let keys = Object.keys(unique)

    expect(keys).toHaveLength(5)
  })

})