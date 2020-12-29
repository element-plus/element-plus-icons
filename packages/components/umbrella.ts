import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Umbrella = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M320 768a32 32 0 1164 0 64 64 0 00128 0V512H64a448 448 0 11896 0H576v256a128 128 0 11-256 0zm570.688-320a384.128 384.128 0 00-757.376 0h757.376z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Umbrella.displayName = 'Umbrella'

export default Umbrella
