import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const MoreFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M176 416a112 112 0 110 224 112 112 0 010-224zm336 0a112 112 0 110 224 112 112 0 010-224zm336 0a112 112 0 110 224 112 112 0 010-224z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

MoreFilled.displayName = 'ElIconMoreFilled'

export default MoreFilled
