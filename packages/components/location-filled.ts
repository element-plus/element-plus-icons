import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const LocationFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 100-128 64 64 0 000 128zm0 140.8a204.8 204.8 0 110-409.6 204.8 204.8 0 010 409.6z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

LocationFilled.displayName = 'ElIconLocationFilled'

export default LocationFilled
