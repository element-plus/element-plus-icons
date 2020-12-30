import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Location = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M800 416a288 288 0 10-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 01704 0c0 149.312-117.312 330.688-352 544z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M512 512a96 96 0 100-192 96 96 0 000 192zm0 64a160 160 0 110-320 160 160 0 010 320z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Location.displayName = 'ElIconLocation'

export default Location
