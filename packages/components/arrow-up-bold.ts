import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const ArrowUpBold = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M104.704 685.248a64 64 0 0090.496 0l316.8-316.8 316.8 316.8a64 64 0 0090.496-90.496L557.248 232.704a64 64 0 00-90.496 0L104.704 594.752a64 64 0 000 90.496z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

ArrowUpBold.displayName = 'ElIconArrowUpBold'

export default ArrowUpBold
