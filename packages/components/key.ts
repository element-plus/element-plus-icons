import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Key = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M448 456.064V96a32 32 0 0132-32.064L672 64a32 32 0 010 64H512v128h160a32 32 0 010 64H512v128a256 256 0 11-64 8.064zM512 896a192 192 0 100-384 192 192 0 000 384z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Key.displayName = 'Key'

export default Key
