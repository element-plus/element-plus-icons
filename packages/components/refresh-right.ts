import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const RefreshRight = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M784.512 230.272v-50.56a32 32 0 1164 0v149.056a32 32 0 01-32 32H667.52a32 32 0 110-64h92.992A320 320 0 10524.8 833.152a320 320 0 00320-320h64a384 384 0 01-384 384 384 384 0 01-384-384 384 384 0 01643.712-282.88z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

RefreshRight.displayName = 'RefreshRight'

export default RefreshRight
