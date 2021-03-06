import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const CaretLeft = function (props: any) {
  return h(Icon, props, {
    default: () => [h('path', { d: 'M672 192L288 511.936 672 832z' }, null)],
  })
} as FunctionalComponent

CaretLeft.displayName = 'ElIconCaretLeft'

export default CaretLeft
