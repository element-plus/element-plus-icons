import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Connection = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M640 384v64H448a128 128 0 00-128 128v128a128 128 0 00128 128h320a128 128 0 00128-128V576a128 128 0 00-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 01-192 192H448a192 192 0 01-192-192V576a192 192 0 01192-192h192z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M384 640v-64h192a128 128 0 00128-128V320a128 128 0 00-128-128H256a128 128 0 00-128 128v128a128 128 0 0064 110.848v70.272A192.064 192.064 0 0164 448V320a192 192 0 01192-192h320a192 192 0 01192 192v128a192 192 0 01-192 192H384z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Connection.displayName = 'ElIconConnection'

export default Connection
