import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const RefreshLeft = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M289.088 296.704h92.992a32 32 0 010 64H232.96a32 32 0 01-32-32V179.712a32 32 0 0164 0v50.56a384 384 0 01643.84 282.88 384 384 0 01-383.936 384 384 384 0 01-384-384h64a320 320 0 10640 0 320 320 0 00-555.712-216.448z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

RefreshLeft.displayName = 'ElIconRefreshLeft'

export default RefreshLeft
