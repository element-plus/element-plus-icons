import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Camera = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M896 256H128v576h768V256zm-199.424-64l-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 01359.552 64h304.96a64 64 0 0157.216 35.328L768.192 192H928a32 32 0 0132 32v640a32 32 0 01-32 32H96a32 32 0 01-32-32V224a32 32 0 0132-32zm416 512a160 160 0 100-320 160 160 0 000 320zm0 64a224 224 0 110-448 224 224 0 010 448z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Camera.displayName = 'ElIconCamera'

export default Camera
