import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const NoSmoking = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M440.256 576H256v128h56.256l-64 64H224a32 32 0 01-32-32V544a32 32 0 0132-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0132 32v192a32 32 0 01-32 32H519.744l64-64zM768 576v128h128V576H768zM738.304 368.448l45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

NoSmoking.displayName = 'ElIconNoSmoking'

export default NoSmoking
