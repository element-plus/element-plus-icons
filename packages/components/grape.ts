import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Grape = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M544 195.2a160 160 0 0196 60.8 160 160 0 11146.24 254.976 160 160 0 01-128 224 160 160 0 11-292.48 0 160 160 0 01-128-224A160 160 0 11384 256a160 160 0 0196-60.8V128h-64a32 32 0 010-64h192a32 32 0 010 64h-64v67.2zM512 448a96 96 0 100-192 96 96 0 000 192zm-256 0a96 96 0 100-192 96 96 0 000 192zm128 224a96 96 0 100-192 96 96 0 000 192zm128 224a96 96 0 100-192 96 96 0 000 192zm128-224a96 96 0 100-192 96 96 0 000 192zm128-224a96 96 0 100-192 96 96 0 000 192z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Grape.displayName = 'Grape'

export default Grape
