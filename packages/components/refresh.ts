import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Refresh = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M771.776 794.88A384 384 0 01128 512h64a320 320 0 00555.712 216.448H654.72a32 32 0 110-64h149.056a32 32 0 0132 32v148.928a32 32 0 11-64 0v-50.56zM276.288 295.616h92.992a32 32 0 010 64H220.16a32 32 0 01-32-32V178.56a32 32 0 0164 0v50.56A384 384 0 01896.128 512h-64a320 320 0 00-555.776-216.384z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Refresh.displayName = 'Refresh'

export default Refresh
