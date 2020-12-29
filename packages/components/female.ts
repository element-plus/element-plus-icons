import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Female = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 640a256 256 0 100-512 256 256 0 000 512zm0 64a320 320 0 110-640 320 320 0 010 640z',
        },
        null,
      ),

      h(
        'path',
        { d: 'M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z' },
        null,
      ),

      h(
        'path',
        { d: 'M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z' },
        null,
      ),
    ],
  })
} as FunctionalComponent

Female.displayName = 'Female'

export default Female
