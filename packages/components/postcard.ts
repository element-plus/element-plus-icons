import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Postcard = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M160 224a32 32 0 00-32 32v512a32 32 0 0032 32h704a32 32 0 0032-32V256a32 32 0 00-32-32H160zm0-64h704a96 96 0 0196 96v512a96 96 0 01-96 96H160a96 96 0 01-96-96V256a96 96 0 0196-96z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M704 320a64 64 0 110 128 64 64 0 010-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zM288 576h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Postcard.displayName = 'Postcard'

export default Postcard
