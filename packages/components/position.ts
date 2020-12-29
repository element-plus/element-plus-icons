import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Position = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M249.6 417.088l319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 01-7.68-61.44l777.792-311.04a32 32 0 0141.6 41.6l-310.336 775.68a32 32 0 01-61.44-7.808L512 516.992l-391.424-52.736z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Position.displayName = 'Position'

export default Position
