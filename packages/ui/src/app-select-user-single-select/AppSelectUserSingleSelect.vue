<script setup>
import { onMounted, ref } from 'vue'

import { Select as ASelect } from 'ant-design-vue'
import 'ant-design-vue/es/select/style/index.js'

import { useApplication } from '@monorepo_util/hooks'
import { isNotEmptyArray } from '@monorepo_util/shared'

defineOptions({
  /**
   * 用户单项选择框
   */
  name: 'AppSelectUserSingleSelect',
})

defineProps({
  /**
   * 用户名
   */
  user: {
    type: String,
    default: undefined,
  },
  /**
   * 选择框默认文字
   */
  placeholder: {
    type: String,
    default: '请选择用户名',
  },
})

const emit = defineEmits(['update:user', 'changeUser'])

const options = ref([])

const { inject } = useApplication()
const { getUserList } = inject()

onMounted(async () => {
  await fetchUserOptions()
})

async function fetchUserOptions() {
  try {
    const res = await getUserList()
    console.log(res, 'res')
    if (isNotEmptyArray(res.data)) {
      options.value = res.data.map((user) => ({ label: user.username, value: user.username }))
    }
  } catch (error) {
    console.error('getUserList error', error)
  }
}

function handleChange(user, userOption) {
  emit('update:user', user)
  emit('changeUser', user, userOption)
}
</script>

<template>
  <ASelect :value="user" :placeholder="placeholder" :options="options" @change="handleChange" />
</template>
