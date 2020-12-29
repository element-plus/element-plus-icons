import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Timer = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 896a320 320 0 100-640 320 320 0 000 640zm0 64a384 384 0 110-768 384 384 0 010 768z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M512 320a32 32 0 0132 32l-.512 224a32 32 0 11-64 0L480 352a32 32 0 0132-32z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M448 576a64 64 0 10128 0 64 64 0 10-128 0zM544 128v128h-64V128h-96a32 32 0 010-64h256a32 32 0 110 64h-96z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Timer.displayName = 'Timer'

export default Timer
