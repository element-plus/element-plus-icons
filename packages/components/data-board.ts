import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const DataBoard = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h('path', { d: 'M32 128h960v64H32z' }, null),

      h(
        'path',
        {
          d:
            'M192 192v512h640V192H192zm-64-64h768v608a32 32 0 01-32 32H160a32 32 0 01-32-32V128z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

DataBoard.displayName = 'ElIconDataBoard'

export default DataBoard
