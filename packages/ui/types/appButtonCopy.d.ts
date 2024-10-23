import { BasicAttributes, ListenerProp } from './component'

export interface AppButtonCopyProps extends BasicAttributes {
  content?: string
}

export class AppButtonCopy {
  $props: AppButtonCopyProps
}

export class _AppButtonCopyComponent extends AppButtonCopy {}
