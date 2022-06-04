import * as icons from './components'

import type { App } from 'vue'

export interface InstallOptions {
  /** @default `ElIcon` */
  prefix?: string
}
export default (app: App, { prefix = 'ElIcon' }: InstallOptions = {}) => {
  for (const [key, component] of Object.entries(icons)) {
    app.component(prefix + key, component)
  }
}

export { icons }
export * from './components'
