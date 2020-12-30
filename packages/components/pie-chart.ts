import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const PieChart = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M448 68.48v64.832A384.128 384.128 0 00512 896a384.128 384.128 0 00378.688-320h64.768A448.128 448.128 0 0164 512 448.128 448.128 0 01448 68.48z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M576 97.28V448h350.72A384.064 384.064 0 00576 97.28zM512 64V33.152A448 448 0 01990.848 512H512V64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

PieChart.displayName = 'ElIconPieChart'

export default PieChart
