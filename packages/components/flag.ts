import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Flag = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        { d: 'M288 128h608L736 384l160 256H288v320h-96V64h96v64z' },
        null,
      ),
    ],
  })
} as FunctionalComponent

Flag.displayName = 'ElIconFlag'

export default Flag
