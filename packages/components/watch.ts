import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Watch = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 768a256 256 0 100-512 256 256 0 000 512zm0 64a320 320 0 110-640 320 320 0 010 640z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M480 352a32 32 0 0132 32v160a32 32 0 01-64 0V384a32 32 0 0132-32z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zM608 256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Watch.displayName = 'ElIconWatch'

export default Watch
