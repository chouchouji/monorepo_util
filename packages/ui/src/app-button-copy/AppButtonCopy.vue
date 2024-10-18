<script setup>
import Clipboard from 'clipboard'

import { IconCopy } from '@arco-design/web-vue/es/icon'

import { message as AMessage } from 'ant-design-vue'
import 'ant-design-vue/es/message/style/index.js'

defineOptions({
  /**
   * 通用组件，复制按钮。
   */
  name: 'AppButtonCopy',
})

const props = defineProps({
  /**
   * 所要复制的内容
   */
  content: {
    type: String,
    default: '',
  },
})

/**
 * 点击按钮回调函数
 */
function clickButton() {
  const clipboard = new Clipboard('.app-button-copy', {
    text: () => props.content,
  })

  clipboard.on('success', () => {
    AMessage.success('复制成功')
    clipboard.destroy()
  })

  clipboard.on('error', (event) => {
    console.log('error event: ', event)
    AMessage.error('复制失败，请重试')
    clipboard.destroy()
  })
}
</script>

<template>
  <IconCopy class="app-button-copy" @click="clickButton" />
</template>

<style lang="less" scoped>
@import './appButtonCopy.less';
</style>
