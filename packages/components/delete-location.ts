import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const DeleteLocation = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        { d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' },
        null,
      ),

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
        { d: 'M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z' },
        null,
      ),
    ],
  })
} as FunctionalComponent

DeleteLocation.displayName = 'ElIconDeleteLocation'

export default DeleteLocation
