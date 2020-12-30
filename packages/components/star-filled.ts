import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const StarFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

StarFilled.displayName = 'ElIconStarFilled'

export default StarFilled
