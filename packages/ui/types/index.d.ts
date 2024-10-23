export * from './appSelectUserSingleSelect'
export * from './appButtonCopy'
export * from './appDateRangePicker'
export * from './appDescriptionsTitle'

declare module 'vue' {
  export interface GlobalComponents {
    AppSelectUserSingleSelect: (typeof import('@monorepo_util/ui'))['_AppSelectUserSingleSelectComponent']
    AppButtonCopy: (typeof import('@monorepo_util/ui'))['_AppButtonCopyComponent']
    AppDateRangePicker: (typeof import('@monorepo_util/ui'))['_AppDateRangePickerComponent']
    AppDescriptionsTitle: (typeof import('@monorepo_util/ui'))['_AppDescriptionsTitleComponent']
  }
}
