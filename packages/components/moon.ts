import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Moon = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M240.448 240.448a384 384 0 10559.424 525.696 448 448 0 01-542.016-542.08 390.592 390.592 0 00-17.408 16.384zm181.056 362.048a384 384 0 00525.632 16.384A448 448 0 11405.056 76.8a384 384 0 0016.448 525.696z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Moon.displayName = 'ElIconMoon'

export default Moon
