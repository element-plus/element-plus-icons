import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const SortUp = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M384 141.248V928a32 32 0 1064 0V218.56l242.688 242.688A32 32 0 10736 416L438.592 118.656A32 32 0 00384 141.248z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

SortUp.displayName = 'ElIconSortUp'

export default SortUp
