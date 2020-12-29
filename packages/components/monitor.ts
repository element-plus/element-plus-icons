import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Monitor = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M544 768v128h192a32 32 0 110 64H288a32 32 0 110-64h192V768H192A128 128 0 0164 640V256a128 128 0 01128-128h640a128 128 0 01128 128v384a128 128 0 01-128 128H544zM192 192a64 64 0 00-64 64v384a64 64 0 0064 64h640a64 64 0 0064-64V256a64 64 0 00-64-64H192z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Monitor.displayName = 'Monitor'

export default Monitor
