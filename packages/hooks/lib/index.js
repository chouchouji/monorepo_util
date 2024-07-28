// src/useTouch.ts
import { ref } from "vue";
function getDirection(x, y) {
  if (x > y) {
    return "horizontal";
  }
  if (y > x) {
    return "vertical";
  }
}
function useTouch() {
  const startX = ref(0);
  const startY = ref(0);
  const deltaX = ref(0);
  const deltaY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const prevX = ref(0);
  const prevY = ref(0);
  const moveX = ref(0);
  const moveY = ref(0);
  const direction = ref();
  const touching = ref(false);
  const dragging = ref(false);
  const startTime = ref(0);
  const distance = ref(0);
  let draggingAnimationFrame = null;
  const resetTouch = () => {
    startX.value = 0;
    startY.value = 0;
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    prevX.value = 0;
    prevY.value = 0;
    moveX.value = 0;
    moveY.value = 0;
    direction.value = void 0;
    touching.value = false;
    dragging.value = false;
    startTime.value = 0;
    distance.value = 0;
  };
  const startTouch = (event) => {
    resetTouch();
    const { clientX: x, clientY: y } = event.touches[0];
    startX.value = x;
    startY.value = y;
    prevX.value = x;
    prevY.value = y;
    touching.value = true;
    startTime.value = performance.now();
    dragging.value = false;
    if (draggingAnimationFrame) {
      window.cancelAnimationFrame(draggingAnimationFrame);
    }
  };
  const moveTouch = (event) => {
    const { clientX: x, clientY: y } = event.touches[0];
    dragging.value = true;
    deltaX.value = x - startX.value;
    deltaY.value = y - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);
    distance.value = Math.sqrt(offsetX.value ** 2 + offsetY.value ** 2);
    moveX.value = x - prevX.value;
    moveY.value = y - prevY.value;
    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
    prevX.value = x;
    prevY.value = y;
  };
  const endTouch = () => {
    touching.value = false;
    draggingAnimationFrame = window.requestAnimationFrame(() => {
      dragging.value = false;
    });
  };
  return {
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    prevX,
    prevY,
    moveX,
    moveY,
    direction,
    touching,
    dragging,
    startTime,
    distance,
    resetTouch,
    startTouch,
    moveTouch,
    endTouch
  };
}

// src/useCounter.ts
import { ref as ref2, computed } from "vue";
import { isNumber } from "@monorepo_util/shared";
function useCounter() {
  const count = ref2(0);
  const doubleCount = computed(() => {
    return count.value * 2;
  });
  const isNumberCount = computed(() => {
    return isNumber(count.value);
  });
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
  };
}
export {
  useCounter,
  useTouch
};
