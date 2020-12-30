import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Tickets = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M192 128v768h640V128H192zm-32-64h704a32 32 0 0132 32v832a32 32 0 01-32 32H160a32 32 0 01-32-32V96a32 32 0 0132-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Tickets.displayName = 'ElIconTickets'

export default Tickets
