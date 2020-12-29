import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Promotion = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M64 448l832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Promotion.displayName = 'Promotion'

export default Promotion
