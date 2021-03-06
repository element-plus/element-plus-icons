import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const BrushFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M608 704v160a96 96 0 01-192 0V704h-96a128 128 0 01-128-128h640a128 128 0 01-128 128h-96zM192 512V128.064h640V512H192z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

BrushFilled.displayName = 'ElIconBrushFilled'

export default BrushFilled
