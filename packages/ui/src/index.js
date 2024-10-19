import AppButtonCopy from './app-button-copy/AppButtonCopy.vue'
import AppDateRangePicker from './app-date-range-picker/AppDateRangePicker.vue'
import AppDescriptionsTitle from './app-descriptions-title/AppDescriptionsTitle.vue'
import AppSelectUserSingleSelect from './app-select-user-single-select/AppSelectUserSingleSelect.vue'

const components = [AppButtonCopy, AppDateRangePicker, AppDescriptionsTitle, AppSelectUserSingleSelect]

const install = (app) => {
  components.forEach((component) => app.use(component.name, component))
}

const BusinessUI = {
  install,
}

export { AppButtonCopy, AppDateRangePicker, AppDescriptionsTitle, AppSelectUserSingleSelect }

export default BusinessUI
