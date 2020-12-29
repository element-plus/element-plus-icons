import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const CaretBottom = function (props: any) {
  return h(Icon, props, {
    default: () => [h('path', { d: 'M192 384l320 384 320-384z' }, null)],
  })
} as FunctionalComponent

CaretBottom.displayName = 'CaretBottom'

export default CaretBottom
