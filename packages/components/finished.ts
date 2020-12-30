import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Finished = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M280.768 753.728L691.456 167.04a32 32 0 1152.416 36.672L314.24 817.472a32 32 0 01-45.44 7.296l-230.4-172.8a32 32 0 0138.4-51.2l203.968 152.96zM736 448a32 32 0 110-64h192a32 32 0 110 64H736zM608 640a32 32 0 010-64h319.936a32 32 0 110 64H608zM480 832a32 32 0 110-64h447.936a32 32 0 110 64H480z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Finished.displayName = 'ElIconFinished'

export default Finished
