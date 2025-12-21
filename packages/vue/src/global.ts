import * as icons from './components'
import type { App } from 'vue'

export interface InstallOptions {
  /** @default `ElIcon` */
  prefix?: string
}
// eslint-disable-next-line import/no-default-export
export default function elementPlusIcons(
  app: App,
  { prefix = 'ElIcon' }: InstallOptions = {},
) {
  for (const [key, component] of Object.entries(icons)) {
    app.component(prefix + key, component)
  }
}

export { icons }
export * from './components'
