import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Menu = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M160 448a32 32 0 01-32-32V160.064a32 32 0 0132-32h256a32 32 0 0132 32V416a32 32 0 01-32 32H160zm448 0a32 32 0 01-32-32V160.064a32 32 0 0132-32h255.936a32 32 0 0132 32V416a32 32 0 01-32 32H608zM160 896a32 32 0 01-32-32V608a32 32 0 0132-32h256a32 32 0 0132 32v256a32 32 0 01-32 32H160zm448 0a32 32 0 01-32-32V608a32 32 0 0132-32h255.936a32 32 0 0132 32v256a32 32 0 01-32 32H608z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Menu.displayName = 'ElIconMenu'

export default Menu
