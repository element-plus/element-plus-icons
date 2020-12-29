import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Present = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 01-32 32H160a32 32 0 01-32-32V256z',
        },
        null,
      ),

      h(
        'path',
        { d: 'M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z' },
        null,
      ),

      h(
        'path',
        {
          d:
            'M416 256a64 64 0 100-128 64 64 0 000 128zm0 64a128 128 0 110-256 128 128 0 010 256z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M608 256a64 64 0 100-128 64 64 0 000 128zm0 64a128 128 0 110-256 128 128 0 010 256z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Present.displayName = 'Present'

export default Present
