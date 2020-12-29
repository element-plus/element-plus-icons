import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Back = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h('path', { d: 'M224 480h640a32 32 0 110 64H224a32 32 0 010-64z' }, null),

      h(
        'path',
        {
          d:
            'M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Back.displayName = 'Back'

export default Back
