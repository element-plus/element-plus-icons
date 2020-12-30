import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const DishDot = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M384.064 274.56l.064-50.688A128 128 0 01512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 01955.392 768H68.544A448.192 448.192 0 01384 274.56zM96 832h832a32 32 0 110 64H96a32 32 0 110-64zm32-128h768a384 384 0 10-768 0zm447.808-448v-32.32a63.68 63.68 0 00-63.68-63.68 64 64 0 00-64 63.936V256h127.68z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

DishDot.displayName = 'ElIconDishDot'

export default DishDot
