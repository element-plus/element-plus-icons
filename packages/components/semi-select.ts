import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const SemiSelect = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        { d: 'M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z' },
        null,
      ),
    ],
  })
} as FunctionalComponent

SemiSelect.displayName = 'ElIconSemiSelect'

export default SemiSelect
