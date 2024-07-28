"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  useCounter: () => useCounter,
  useTouch: () => useTouch
});
module.exports = __toCommonJS(src_exports);

// src/useTouch.ts
var import_vue = require("vue");
function getDirection(x, y) {
  if (x > y) {
    return "horizontal";
  }
  if (y > x) {
    return "vertical";
  }
}
function useTouch() {
  const startX = (0, import_vue.ref)(0);
  const startY = (0, import_vue.ref)(0);
  const deltaX = (0, import_vue.ref)(0);
  const deltaY = (0, import_vue.ref)(0);
  const offsetX = (0, import_vue.ref)(0);
  const offsetY = (0, import_vue.ref)(0);
  const prevX = (0, import_vue.ref)(0);
  const prevY = (0, import_vue.ref)(0);
  const moveX = (0, import_vue.ref)(0);
  const moveY = (0, import_vue.ref)(0);
  const direction = (0, import_vue.ref)();
  const touching = (0, import_vue.ref)(false);
  const dragging = (0, import_vue.ref)(false);
  const startTime = (0, import_vue.ref)(0);
  const distance = (0, import_vue.ref)(0);
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
var import_vue2 = require("vue");
var import_shared = require("@monorepo_util/shared");
function useCounter() {
  const count = (0, import_vue2.ref)(0);
  const doubleCount = (0, import_vue2.computed)(() => {
    return count.value * 2;
  });
  const isNumberCount = (0, import_vue2.computed)(() => {
    return (0, import_shared.isNumber)(count.value);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useCounter,
  useTouch
});
