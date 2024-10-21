import AppButtonCopy from './AppButtonCopy.vue'

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

withInstall(AppButtonCopy)

export const _AppButtonCopyComponent = AppButtonCopy

export default AppButtonCopy
