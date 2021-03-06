import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const WarningFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 64a448 448 0 110 896 448 448 0 010-896zm0 192a58.432 58.432 0 00-58.24 63.744l23.36 256.384a35.072 35.072 0 0069.76 0l23.296-256.384A58.432 58.432 0 00512 256zm0 512a51.2 51.2 0 100-102.4 51.2 51.2 0 000 102.4z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

WarningFilled.displayName = 'ElIconWarningFilled'

export default WarningFilled
