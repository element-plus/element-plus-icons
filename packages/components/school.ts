import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const School = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M224 128v704h576V128H224zm-32-64h640a32 32 0 0132 32v768a32 32 0 01-32 32H192a32 32 0 01-32-32V96a32 32 0 0132-32z',
        },
        null,
      ),

      h('path', { d: 'M64 832h896v64H64zm256-640h128v96H320z' }, null),

      h(
        'path',
        {
          d:
            'M384 832h256v-64a128 128 0 10-256 0v64zm128-256a192 192 0 01192 192v128H320V768a192 192 0 01192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

School.displayName = 'School'

export default School
