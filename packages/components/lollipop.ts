import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Lollipop = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M513.28 448a64 64 0 1176.544 49.728A96 96 0 00768 448h64a160 160 0 01-320 0h1.28zm-126.976-29.696a256 256 0 1043.52-180.48A256 256 0 01832 448h-64a192 192 0 00-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 01-135.68-135.744l206.208-206.272a320 320 0 11135.744 135.744zm-54.464-36.032a321.92 321.92 0 01-45.248-45.248L195.2 783.552a32 32 0 1045.248 45.248l197.056-197.12z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Lollipop.displayName = 'Lollipop'

export default Lollipop
