<script setup>
import { RangePicker as ARangePicker } from 'ant-design-vue'
import 'ant-design-vue/es/date-picker/style/index.js'

defineOptions({
  /**
   * 通用数据录入组件，时间格式为 YYYY-MM-DD 的日期区间选择框。
   */
  name: 'AppDateRangePicker',
})

defineProps({
  /**
   * 预设时间范围快捷选择
   */
  ranges: {
    type: Array,
    default: () => [],
  },
  /**
   * 输入框提示文字
   */
  placeholder: {
    type: Array,
    default: undefined,
  },
})

const emit = defineEmits(['update:ranges', 'changeRanges'])

/**
 * 输入框变化回调钩子
 * @param {string[]} ranges 变化后的时间范围
 */
function onChange(ranges) {
  emit('update:ranges', ranges)
  emit('changeRanges', ranges)
}
</script>

<template>
  <ARangePicker
    :value="ranges"
    :placeholder="placeholder"
    format="YYYY-MM-DD"
    value-format="YYYY-MM-DD"
    @change="onChange"
  />
</template>
