import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Aim = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M512 96a32 32 0 0132 32v192a32 32 0 01-64 0V128a32 32 0 0132-32zm0 576a32 32 0 0132 32v192a32 32 0 11-64 0V704a32 32 0 0132-32zM96 512a32 32 0 0132-32h192a32 32 0 010 64H128a32 32 0 01-32-32zm576 0a32 32 0 0132-32h192a32 32 0 110 64H704a32 32 0 01-32-32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Aim.displayName = 'ElIconAim'

export default Aim
