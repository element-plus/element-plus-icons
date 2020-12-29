import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Message = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M128 224v512a64 64 0 0064 64h640a64 64 0 0064-64V224H128zm0-64h768a64 64 0 0164 64v512a128 128 0 01-128 128H192A128 128 0 0164 736V224a64 64 0 0164-64z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M904 224L656.512 506.88a192 192 0 01-289.024 0L120 224h784zm-698.944 0l210.56 240.704a128 128 0 00192.704 0L818.944 224H205.056z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Message.displayName = 'Message'

export default Message
