export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)

export function isNotEmptyArray(val: unknown): boolean {
  return isArray(val) && val.length > 0
}

export function normalizeToArray(value: unknown): Array<any> {
  return isArray(value) ? value : [value]
}
