import { provide as _provide, inject as _inject } from 'vue'

const key = 'APPLICATION_KEY'

export function useApplication() {
  return {
    provide(config: any) {
      _provide(key, config)
    },

    inject() {
      return _inject(key)
    },
  }
}
