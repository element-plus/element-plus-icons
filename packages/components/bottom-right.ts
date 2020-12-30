import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const BottomRight = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M352 768a32 32 0 100 64h448a32 32 0 0032-32V352a32 32 0 00-64 0v416H352z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M777.344 822.656a32 32 0 0045.312-45.312l-544-544a32 32 0 00-45.312 45.312l544 544z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

BottomRight.displayName = 'ElIconBottomRight'

export default BottomRight
