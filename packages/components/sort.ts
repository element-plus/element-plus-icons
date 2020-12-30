import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Sort = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M384 96a32 32 0 0164 0v786.752a32 32 0 01-54.592 22.656L95.936 608a32 32 0 010-45.312h.128a32 32 0 0145.184 0L384 805.632V96zm192 45.248a32 32 0 0154.592-22.592L928.064 416a32 32 0 010 45.312h-.128a32 32 0 01-45.184 0L640 218.496V928a32 32 0 11-64 0V141.248z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Sort.displayName = 'ElIconSort'

export default Sort
