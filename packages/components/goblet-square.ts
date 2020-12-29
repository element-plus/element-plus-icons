import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const GobletSquare = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M544 638.912V896h96a32 32 0 110 64H384a32 32 0 110-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0132-32h576a32 32 0 0132 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

GobletSquare.displayName = 'GobletSquare'

export default GobletSquare
