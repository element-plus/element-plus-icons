import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Coordinate = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h('path', { d: 'M480 512h64v320h-64z' }, null),

      h(
        'path',
        {
          d:
            'M192 896h640a64 64 0 00-64-64H256a64 64 0 00-64 64zm64-128h512a128 128 0 01128 128v64H128v-64a128 128 0 01128-128zm256-256a192 192 0 100-384 192 192 0 000 384zm0 64a256 256 0 110-512 256 256 0 010 512z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Coordinate.displayName = 'ElIconCoordinate'

export default Coordinate
