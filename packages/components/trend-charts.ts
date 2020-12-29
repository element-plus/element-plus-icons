import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const TrendCharts = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M128 896V128h768v768H128zm291.712-327.296l128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 10-96 0 48 48 0 0096 0z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

TrendCharts.displayName = 'TrendCharts'

export default TrendCharts
