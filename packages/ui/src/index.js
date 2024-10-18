import AppButtonCopy from './app-button-copy/AppButtonCopy.vue'
import AppDateRangePicker from './app-date-range-picker/AppDateRangePicker.vue'
import AppDescriptionsTitle from './app-descriptions-title/AppDescriptionsTitle.vue'

const components = [AppButtonCopy, AppDateRangePicker, AppDescriptionsTitle]

const install = (app) => {
  components.forEach((component) => app.use(component.name, component))
}

const BusinessUI = {
  install,
}

export { AppButtonCopy, AppDateRangePicker, AppDescriptionsTitle }

export default BusinessUI
