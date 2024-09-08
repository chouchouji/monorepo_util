import { describe, test, expect } from 'vitest'
import { clamp } from '../src/number'

describe('test clamp', () => {
  test('return the right value', () => {
    expect(clamp(2, 1, 3)).toBe(2)
  })
})
