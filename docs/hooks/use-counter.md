# 计数

## useCounter

### 代码

```ts
import { ref, computed } from 'vue'
import { isNumber } from '@monorepo_util/shared'

export function useCounter() {
    const count = ref(0)

    const doubleCount = computed(() => {
        return count.value * 2
    })

    const isNumberCount = computed(() => {
        return isNumber(count.value)
    })

    function decrement(step = 1) {
        count.value -= step;
    }

    function increment(step = 1) {
        count.value += step;
    }

    return {
        count,
        doubleCount,
        isNumberCount,
        decrement,
        increment
    }
}
```

### 使用

```vue
<script setup>
import { useCounter } from '@monorepo_util/hooks'

const { count, decrement, increment, doubleCount } = useCounter()
</script>

<template>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>
  <button @click="decrement()">decrement</button>
  <button @click="increment()">increment</button>
</template>
```