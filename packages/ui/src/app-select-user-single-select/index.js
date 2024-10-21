import AppSelectUserSingleSelect from './AppSelectUserSingleSelect.vue'

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

withInstall(AppSelectUserSingleSelect)

export const _AppSelectUserSingleSelectComponent = AppSelectUserSingleSelect

export default AppSelectUserSingleSelect
