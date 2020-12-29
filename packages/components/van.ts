import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Van = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M128.896 736H96a32 32 0 01-32-32V224a32 32 0 0132-32h576a32 32 0 0132 32v96h164.544a32 32 0 0131.616 27.136l54.144 352A32 32 0 01922.688 736h-91.52a144 144 0 11-286.272 0H415.104a144 144 0 11-286.272 0zm23.36-64a143.872 143.872 0 01239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 01807.744 672zm48.128-192l-14.72-96H704v96h151.872zM688 832a80 80 0 100-160 80 80 0 000 160zm-416 0a80 80 0 100-160 80 80 0 000 160z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Van.displayName = 'Van'

export default Van
