import AppDateRangePicker from './AppDateRangePicker.vue'

export function withInstall(component) {
  const componentWithInstall = component

  componentWithInstall.install = function (app) {
    const { name } = component

    if (name) {
      app.component(name, component)
    }
  }

  return componentWithInstall
}

withInstall(AppDateRangePicker)

export const _AppDateRangePickerComponent = AppDateRangePicker

export default AppDateRangePicker
