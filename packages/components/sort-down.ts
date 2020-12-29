import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const SortDown = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M576 96v709.568L333.312 562.816A32 32 0 10288 608l297.408 297.344A32 32 0 00640 882.688V96a32 32 0 00-64 0z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

SortDown.displayName = 'SortDown'

export default SortDown
