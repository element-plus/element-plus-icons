import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const ChatLineSquare = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M160 826.88L273.536 736H800a64 64 0 0064-64V256a64 64 0 00-64-64H224a64 64 0 00-64 64v570.88zM296 800L147.968 918.4A32 32 0 0196 893.44V256a128 128 0 01128-128h576a128 128 0 01128 128v416a128 128 0 01-128 128H296z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zM352 320h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

ChatLineSquare.displayName = 'ElIconChatLineSquare'

export default ChatLineSquare
