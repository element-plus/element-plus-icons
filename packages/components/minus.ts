import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Minus = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h('path', { d: 'M128 544h768a32 32 0 100-64H128a32 32 0 000 64z' }, null),
    ],
  })
} as FunctionalComponent

Minus.displayName = 'Minus'

export default Minus
