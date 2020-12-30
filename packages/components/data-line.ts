import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const DataLine = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M359.168 768H160a32 32 0 01-32-32V192H64a32 32 0 010-64h896a32 32 0 110 64h-64v544a32 32 0 01-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 11-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1149.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

DataLine.displayName = 'ElIconDataLine'

export default DataLine
