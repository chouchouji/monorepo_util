import * as vue from 'vue';

type TouchDirection = 'horizontal' | 'vertical';
declare function useTouch(): {
    startX: vue.Ref<number>;
    startY: vue.Ref<number>;
    deltaX: vue.Ref<number>;
    deltaY: vue.Ref<number>;
    offsetX: vue.Ref<number>;
    offsetY: vue.Ref<number>;
    prevX: vue.Ref<number>;
    prevY: vue.Ref<number>;
    moveX: vue.Ref<number>;
    moveY: vue.Ref<number>;
    direction: vue.Ref<TouchDirection | undefined>;
    touching: vue.Ref<boolean>;
    dragging: vue.Ref<boolean>;
    startTime: vue.Ref<number>;
    distance: vue.Ref<number>;
    resetTouch: () => void;
    startTouch: (event: TouchEvent) => void;
    moveTouch: (event: TouchEvent) => void;
    endTouch: () => void;
};

declare function useCounter(): {
    count: vue.Ref<number>;
    doubleCount: vue.ComputedRef<number>;
    isNumberCount: vue.ComputedRef<boolean>;
    decrement: (step?: number) => void;
    increment: (step?: number) => void;
};

export { type TouchDirection, useCounter, useTouch };
