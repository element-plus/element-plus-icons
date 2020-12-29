import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Reading = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 863.36l384-54.848v-638.72L525.568 222.72a96 96 0 01-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 009.088 0l370.432-52.928A64 64 0 01960 169.792v638.72a64 64 0 01-54.976 63.36l-388.48 55.488a32 32 0 01-9.088 0l-388.48-55.488A64 64 0 0164 808.512v-638.72a64 64 0 0173.024-63.36z',
        },
        null,
      ),

      h('path', { d: 'M480 192h64v704h-64z' }, null),
    ],
  })
} as FunctionalComponent

Reading.displayName = 'Reading'

export default Reading
