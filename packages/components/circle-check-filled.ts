import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const CircleCheckFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 10-54.336 54.336l126.72 126.72a38.272 38.272 0 0054.336 0l262.4-262.464a38.4 38.4 0 10-54.272-54.336L456.192 600.384z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

CircleCheckFilled.displayName = 'CircleCheckFilled'

export default CircleCheckFilled
