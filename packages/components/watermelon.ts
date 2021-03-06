import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Watermelon = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M683.072 600.32l-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 00824 741.248L683.072 600.32zm231.552 141.056a448 448 0 11-632-632l632 632z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Watermelon.displayName = 'ElIconWatermelon'

export default Watermelon
