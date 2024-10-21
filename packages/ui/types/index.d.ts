export * from './appSelectUserSingleSelect'

declare module 'vue' {
  export interface GlobalComponents {
    AppSelectUserSingleSelect: typeof import('@monorepo_util/ui')['_AppSelectUserSingleSelectComponent']
  }
}
