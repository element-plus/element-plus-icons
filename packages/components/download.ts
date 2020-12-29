import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Download = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M160 832h704a32 32 0 110 64H160a32 32 0 110-64zm384-253.696l236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Download.displayName = 'Download'

export default Download
