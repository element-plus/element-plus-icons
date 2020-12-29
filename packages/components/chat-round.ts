import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const ChatRound = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M174.72 855.68l130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0069.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0189.6 896l56.512-141.248A405.12 405.12 0 0164 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

ChatRound.displayName = 'ChatRound'

export default ChatRound
