# 数字

## clamp

返回三个值当中的中间值，即非最大最小值

### 代码

```ts
export const clamp = (num: number, min: number, max: number) 
    => Math.min(max, Math.max(min, num))
```

### 使用

```ts
import { clamp } from '@monorepo_util/shared'

clamp(2, 1, 5) // 2
```

