# 类型

## isBoolean

判断数据是否为布尔值

### 代码

```ts
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
```

### 使用

```ts
import { isBoolean } from '@monorepo_util/shared'

isBoolean([1,2]) // false

isBoolean(false) // true
```

## isString

判断数据是否为字符串类型

### 代码

```ts
export const isString = (val: unknown): val is string => typeof val === 'string'
```

### 使用

```ts
import { isString } from '@monorepo_util/shared'

isString(false) // false

isString('') // true
```

## isNumber

判断数据是否为数字类型

### 代码

```ts
export const isNumber = (val: unknown): val is number => typeof val === 'number'
```

### 使用

```ts
import { isNumber } from '@monorepo_util/shared'

isNumber(false) // false

isNumber('') // false

isNumber(1) // true
```