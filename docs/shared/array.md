# 数组

## isArray

判断类型是否为数组

### 代码

```ts
export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)
```

### 使用

```ts
import { isArray } from '@monorepo_util/shared'

isArray([1,2]) // true

isArray(false) // false
```

## isNotEmptyArray

判断是否为非空数组

### 代码

```ts
export function isNotEmptyArray(val: unknown): boolean {
    return isArray(val) && val.length > 0
}
```

### 使用

```ts
import { isNotEmptyArray } from '@monorepo_util/shared'

isNotEmptyArray([1,2]) // true

isNotEmptyArray([]) // false

isNotEmptyArray(undefined) // false
```

## normalizeToArray

归一化数据为数组

### 代码

```ts
export function normalizeToArray(value: unknown): Array<any> {
    return isArray(value) ? value : [value]
}
```

### 使用

```ts
import { normalizeToArray } from '@monorepo_util/shared'

normalizeToArray([1, 2]) // [1, 2]

normalizeToArray([]) // []

normalizeToArray(undefined) // [undefined]
```

