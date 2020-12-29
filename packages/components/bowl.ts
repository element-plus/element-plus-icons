import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Bowl = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M714.432 704a351.744 351.744 0 00148.16-256H161.408a351.744 351.744 0 00148.16 256h404.864zM288 766.592A415.68 415.68 0 0196 416a32 32 0 0132-32h768a32 32 0 0132 32 415.68 415.68 0 01-192 350.592V832a64 64 0 01-64 64H352a64 64 0 01-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1145.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0132 55.424L680.576 320zM352 768v64h320v-64H352z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Bowl.displayName = 'Bowl'

export default Bowl
