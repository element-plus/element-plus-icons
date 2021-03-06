import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const ChatLineRound = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M174.72 855.68l135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0189.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 01-206.912-48.384l-175.616 58.56z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zM384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

ChatLineRound.displayName = 'ElIconChatLineRound'

export default ChatLineRound
