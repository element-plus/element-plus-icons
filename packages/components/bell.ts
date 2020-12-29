import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Bell = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        { d: 'M512 64a64 64 0 0164 64v64H448v-64a64 64 0 0164-64z' },
        null,
      ),

      h(
        'path',
        {
          d:
            'M256 768h512V448a256 256 0 10-512 0v320zm256-640a320 320 0 01320 320v384H192V448a320 320 0 01320-320z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zM448 896h128a64 64 0 01-128 0z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Bell.displayName = 'Bell'

export default Bell
