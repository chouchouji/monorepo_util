import { isArray } from './array'

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isEmpty = (val: unknown) =>
  val === undefined || val === null || val === '' || (isArray(val) && !val.length)
