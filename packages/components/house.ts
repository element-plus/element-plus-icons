import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const House = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0140.96 0l352 293.312A32 32 0 01896 398.976V928a32 32 0 01-32 32H160a32 32 0 01-32-32V398.976a32 32 0 0111.52-24.576z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

House.displayName = 'ElIconHouse'

export default House
