import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const BellFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M640 832a128 128 0 01-256 0h256zm192-64H134.4a38.4 38.4 0 010-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 11127.36 0A320.128 320.128 0 01832 448v243.2h57.6a38.4 38.4 0 010 76.8H832z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

BellFilled.displayName = 'ElIconBellFilled'

export default BellFilled
