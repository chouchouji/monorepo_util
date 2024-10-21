import { BasicAttributes, ListenerProp } from './component'

export interface AppSelectUserSingleSelectProps extends BasicAttributes {
  user?: string
  placeholder?: string
  onUpdateUser?: ListenerProp<(value: string) => void>
  onChangeUser?: ListenerProp<(value: string, option: { label: string; value: string }) => void>
}

export class AppSelectUserSingleSelect {
  $props: AppSelectUserSingleSelectProps
}

export class _AppSelectUserSingleSelectComponent extends AppSelectUserSingleSelect {}
