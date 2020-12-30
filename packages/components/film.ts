import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Film = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M160 160v704h704V160H160zm-32-64h768a32 32 0 0132 32v768a32 32 0 01-32 32H128a32 32 0 01-32-32V128a32 32 0 0132-32z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Film.displayName = 'ElIconFilm'

export default Film
