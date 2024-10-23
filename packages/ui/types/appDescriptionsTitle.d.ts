import { BasicAttributes, ListenerProp } from './component'

export type AppDescriptionsTitleSize = 'small' | 'default' | 'large'

export type AppDescriptionsTitleType = 'square' | 'column' | 'circle'

export interface AppDescriptionsTitleProps extends BasicAttributes {
  title?: string
  type?: AppDescriptionsTitleType
  size?: AppDescriptionsTitleSize
}

export class AppDescriptionsTitle {
  $props: AppDescriptionsTitleProps
}

export class _AppDescriptionsTitleComponent extends AppDescriptionsTitle {}
