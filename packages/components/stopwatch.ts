import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Stopwatch = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Stopwatch.displayName = 'ElIconStopwatch'

export default Stopwatch
