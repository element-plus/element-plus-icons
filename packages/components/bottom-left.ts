import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const BottomLeft = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M256 768h416a32 32 0 110 64H224a32 32 0 01-32-32V352a32 32 0 0164 0v416z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M246.656 822.656a32 32 0 01-45.312-45.312l544-544a32 32 0 0145.312 45.312l-544 544z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

BottomLeft.displayName = 'ElIconBottomLeft'

export default BottomLeft
