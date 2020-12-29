import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Calendar = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M128 384v512h768V192H768v32a32 32 0 11-64 0v-32H320v32a32 32 0 01-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1164 0v32h160a32 32 0 0132 32v768a32 32 0 01-32 32H96a32 32 0 01-32-32V160a32 32 0 0132-32h160V96a32 32 0 0164 0v32zm-32 384h64a32 32 0 010 64h-64a32 32 0 010-64zm0 192h64a32 32 0 110 64h-64a32 32 0 110-64zm192-192h64a32 32 0 010 64h-64a32 32 0 010-64zm0 192h64a32 32 0 110 64h-64a32 32 0 110-64zm192-192h64a32 32 0 110 64h-64a32 32 0 110-64zm0 192h64a32 32 0 110 64h-64a32 32 0 110-64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Calendar.displayName = 'Calendar'

export default Calendar
