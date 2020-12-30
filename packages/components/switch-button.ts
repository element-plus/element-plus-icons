import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const SwitchButton = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M352 159.872V230.4a352 352 0 10320 0v-70.528A416.128 416.128 0 01512 960a416 416 0 01-160-800.128z',
        },
        null,
      ),

      h(
        'path',
        { d: 'M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z' },
        null,
      ),
    ],
  })
} as FunctionalComponent

SwitchButton.displayName = 'ElIconSwitchButton'

export default SwitchButton
