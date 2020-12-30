import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Smoking = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M256 576v128h640V576H256zm-32-64h704a32 32 0 0132 32v192a32 32 0 01-32 32H224a32 32 0 01-32-32V544a32 32 0 0132-32z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Smoking.displayName = 'ElIconSmoking'

export default Smoking
