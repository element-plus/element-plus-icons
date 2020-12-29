import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Refrigerator = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M256 448h512V160a32 32 0 00-32-32H288a32 32 0 00-32 32v288zm0 64v352a32 32 0 0032 32h448a32 32 0 0032-32V512H256zm32-448h448a96 96 0 0196 96v704a96 96 0 01-96 96H288a96 96 0 01-96-96V160a96 96 0 0196-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Refrigerator.displayName = 'Refrigerator'

export default Refrigerator
