import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const GoodsFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 11384 0h-64a128 128 0 10-256 0z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

GoodsFilled.displayName = 'ElIconGoodsFilled'

export default GoodsFilled
