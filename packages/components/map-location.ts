import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const MapLocation = function (props: any) {
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
            'M512 448a64 64 0 100-128 64 64 0 000 128zm0 64a128 128 0 110-256 128 128 0 010 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

MapLocation.displayName = 'ElIconMapLocation'

export default MapLocation
