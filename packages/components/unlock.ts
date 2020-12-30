import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Unlock = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M224 448a32 32 0 00-32 32v384a32 32 0 0032 32h576a32 32 0 0032-32V480a32 32 0 00-32-32H224zm0-64h576a96 96 0 0196 96v384a96 96 0 01-96 96H224a96 96 0 01-96-96V480a96 96 0 0196-96z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M512 544a32 32 0 0132 32v192a32 32 0 11-64 0V576a32 32 0 0132-32zM690.304 248.704A192.064 192.064 0 00320 320v64h352l96 38.4V448H256V320a256 256 0 01493.76-95.104l-59.456 23.808z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Unlock.displayName = 'ElIconUnlock'

export default Unlock
