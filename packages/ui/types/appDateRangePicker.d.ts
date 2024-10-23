import { BasicAttributes, ListenerProp } from './component'
import type { Dayjs } from 'dayjs'

export interface AppDateRangePickerProps extends BasicAttributes {
  range?: Dayjs[]
  placeholder?: string[]
}

export class AppDateRangePicker {
  $props: AppDateRangePickerProps
}

export class _AppDateRangePickerComponent extends AppDateRangePicker {}
