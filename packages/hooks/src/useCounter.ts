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