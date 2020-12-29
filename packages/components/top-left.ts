import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const TopLeft = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M256 256h416a32 32 0 100-64H224a32 32 0 00-32 32v448a32 32 0 0064 0V256z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M246.656 201.344a32 32 0 00-45.312 45.312l544 544a32 32 0 0045.312-45.312l-544-544z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

TopLeft.displayName = 'TopLeft'

export default TopLeft
