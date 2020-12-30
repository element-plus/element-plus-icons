import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Check = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Check.displayName = 'ElIconCheck'

export default Check
