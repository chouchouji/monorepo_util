import { describe, test, expect, vi } from 'vitest'
import { isArray, isNotEmptyArray, normalizeToArray } from '../src/array'

describe('test isArray', () => {
  test('when value is String', () => {
    expect(isArray('chouchouji')).toBe(false)
  })

  test('when value is Number', () => {
    expect(isArray(2)).toBe(false)
  })

  test('when value is Null', () => {
    expect(isArray(null)).toBe(false)
  })

  test('when value is Undefined', () => {
    expect(isArray(undefined)).toBe(false)
  })

  test('when value is Boolean', () => {
    expect(isArray(false)).toBe(false)
  })

  test('when value is Object', () => {
    expect(isArray({ name: 'chouchouji' })).toBe(false)
  })

  test('when value is Function', () => {
    expect(isArray(() => {})).toBe(false)
  })

  test('when value is Date', () => {
    expect(isArray(Date())).toBe(false)
  })

  test('when value is RegExp', () => {
    expect(isArray(new RegExp(''))).toBe(false)
  })

  test('when value is Array', () => {
    expect(isArray([])).toBe(true)
  })
})

describe('test isNotEmptyArray', () => {
  test('when value is String', () => {
    expect(isNotEmptyArray('chouchouji')).toBe(false)
  })

  test('when value is Number', () => {
    expect(isNotEmptyArray(2)).toBe(false)
  })

  test('when value is Null', () => {
    expect(isNotEmptyArray(null)).toBe(false)
  })

  test('when value is Undefined', () => {
    expect(isNotEmptyArray(undefined)).toBe(false)
  })

  test('when value is Boolean', () => {
    expect(isNotEmptyArray(false)).toBe(false)
  })

  test('when value is Object', () => {
    expect(isNotEmptyArray({ name: 'chouchouji' })).toBe(false)
  })

  test('when value is Function', () => {
    expect(isNotEmptyArray(() => {})).toBe(false)
  })

  test('when value is Date', () => {
    expect(isNotEmptyArray(Date())).toBe(false)
  })

  test('when value is RegExp', () => {
    expect(isNotEmptyArray(new RegExp(''))).toBe(false)
  })

  test('when value is empty Array', () => {
    expect(isNotEmptyArray([])).toBe(false)
  })

  test('when value is not empty Array', () => {
    expect(isNotEmptyArray([''])).toBe(true)
  })
})

describe('test normalizeToArray', () => {
  test('when value is String', () => {
    expect(normalizeToArray('chouchouji')).toStrictEqual(['chouchouji'])
  })

  test('when value is Number', () => {
    expect(normalizeToArray(2)).toStrictEqual([2])
  })

  test('when value is Null', () => {
    expect(normalizeToArray(null)).toStrictEqual([null])
  })

  test('when value is Undefined', () => {
    expect(normalizeToArray(undefined)).toStrictEqual([undefined])
  })

  test('when value is Boolean', () => {
    expect(normalizeToArray(false)).toStrictEqual([false])
  })

  test('when value is Object', () => {
    expect(normalizeToArray({ name: 'chouchouji' })).toStrictEqual([{ name: 'chouchouji' }])
  })

  test('when value is Function', () => {
    const fn = vi.fn()
    expect(normalizeToArray(fn)).toStrictEqual([fn])
  })

  test('when value is empty Array', () => {
    expect(normalizeToArray([])).toStrictEqual([])
  })

  test('when value is not empty Array', () => {
    expect(normalizeToArray([1, 2, 3])).toStrictEqual([1, 2, 3])
  })
})
