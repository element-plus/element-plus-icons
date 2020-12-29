import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Ship = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 386.88V448h405.568a32 32 0 0130.72 40.768l-76.48 267.968A192 192 0 01687.168 896H336.832a192 192 0 01-184.64-139.264L75.648 488.768A32 32 0 01106.368 448H448V117.888a32 32 0 0147.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 01-2.048 57.216L512 386.88zm0-70.272l144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 00336.832 832h350.336a128 128 0 00123.072-92.8l28.352-99.2H185.408z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Ship.displayName = 'Ship'

export default Ship
