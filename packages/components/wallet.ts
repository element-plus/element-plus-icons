import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Wallet = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M640 288h-64V128H128v704h384v32a32 32 0 0032 32H96a32 32 0 01-32-32V96a32 32 0 0132-32h512a32 32 0 0132 32v192z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M128 320v512h768V320H128zm-32-64h832a32 32 0 0132 32v576a32 32 0 01-32 32H96a32 32 0 01-32-32V288a32 32 0 0132-32z',
        },
        null,
      ),

      h('path', { d: 'M704 640a64 64 0 110-128 64 64 0 010 128z' }, null),
    ],
  })
} as FunctionalComponent

Wallet.displayName = 'Wallet'

export default Wallet
