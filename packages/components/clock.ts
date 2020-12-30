import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Clock = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M480 256a32 32 0 0132 32v256a32 32 0 01-64 0V288a32 32 0 0132-32z',
        },
        null,
      ),

      h(
        'path',
        { d: 'M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z' },
        null,
      ),
    ],
  })
} as FunctionalComponent

Clock.displayName = 'ElIconClock'

export default Clock
