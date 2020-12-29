import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const ArrowUp = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M488.832 344.32l-339.84 356.672a32 32 0 000 44.16l.384.384a29.44 29.44 0 0042.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0042.688 0l.384-.384a32 32 0 000-44.16L535.168 344.32a32 32 0 00-46.336 0z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

ArrowUp.displayName = 'ArrowUp'

export default ArrowUp
