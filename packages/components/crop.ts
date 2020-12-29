import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Crop = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M256 768h672a32 32 0 110 64H224a32 32 0 01-32-32V96a32 32 0 0164 0v672z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M832 224v704a32 32 0 11-64 0V256H96a32 32 0 010-64h704a32 32 0 0132 32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Crop.displayName = 'Crop'

export default Crop
