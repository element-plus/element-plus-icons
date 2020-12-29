import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const CirclePlus = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h('path', { d: 'M352 480h320a32 32 0 110 64H352a32 32 0 010-64z' }, null),

      h(
        'path',
        { d: 'M480 672V352a32 32 0 1164 0v320a32 32 0 01-64 0z' },
        null,
      ),

      h(
        'path',
        {
          d:
            'M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

CirclePlus.displayName = 'CirclePlus'

export default CirclePlus
