import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const CaretTop = function (props: any) {
  return h(Icon, props, {
    default: () => [h('path', { d: 'M512 320L192 704h639.936z' }, null)],
  })
} as FunctionalComponent

CaretTop.displayName = 'CaretTop'

export default CaretTop
