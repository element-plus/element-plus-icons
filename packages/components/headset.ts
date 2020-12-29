import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Headset = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M896 529.152V512a384 384 0 10-768 0v17.152A128 128 0 01320 640v128a128 128 0 11-256 0V512a448 448 0 11896 0v256a128 128 0 11-256 0V640a128 128 0 01192-110.848zM896 640a64 64 0 00-128 0v128a64 64 0 00128 0V640zm-768 0v128a64 64 0 00128 0V640a64 64 0 10-128 0z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Headset.displayName = 'Headset'

export default Headset
