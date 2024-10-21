<script setup>
import { computed } from 'vue'

defineOptions({
  /**
   * 业务展示组件，描述列表自定义标题
   */
  name: 'AppDescriptionsTitle',
})

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'default',
    validator: (val) => {
      return ['small', 'default', 'large'].includes(val)
    },
  },
  type: {
    type: String,
    default: 'square',
    validator: (val) => {
      return ['square', 'column', 'circle'].includes(val)
    },
  },
})

/**
 * 匹配标题尺寸
 */
const filteredTitleSize = computed(() => ({
  'app-descriptions-title--small': props.size === 'small',
  'app-descriptions-title--large': props.size === 'large',

  'app-descriptions-badge--square': props.type === 'square',
  'app-descriptions-badge--column': props.type === 'column',
  'app-descriptions-badge--circle': props.type === 'circle',
}))
</script>

<template>
  <div class="app-descriptions-title">
    <div class="app-descriptions-title--flex">
      <p class="app-descriptions-title--main" :class="filteredTitleSize">
        <slot name="title">
          {{ title }}
        </slot>
      </p>
      <slot name="colon" />
    </div>

    <div class="app-descriptions-title--extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './style/index.less';
</style>
