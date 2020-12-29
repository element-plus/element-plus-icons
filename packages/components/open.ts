import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Open = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M329.956 257.138a254.862 254.862 0 000 509.724h364.088a254.862 254.862 0 000-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 110 655.36H329.956a327.68 327.68 0 110-655.36z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M694.044 621.227a109.227 109.227 0 100-218.454 109.227 109.227 0 000 218.454zm0 72.817a182.044 182.044 0 110-364.088 182.044 182.044 0 010 364.088z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Open.displayName = 'Open'

export default Open
