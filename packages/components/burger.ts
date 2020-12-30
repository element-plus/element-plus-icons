import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Burger = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M160 512a32 32 0 00-32 32v64a32 32 0 0030.08 32H864a32 32 0 0032-32v-64a32 32 0 00-32-32H160zm736-58.56A96 96 0 01960 544v64a96 96 0 01-51.968 85.312L855.36 833.6a96 96 0 01-89.856 62.272H258.496A96 96 0 01168.64 833.6l-52.608-140.224A96 96 0 0164 608v-64a96 96 0 0164-90.56V448a384 384 0 11768 5.44zM832 448a320 320 0 00-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0029.952 20.736h507.008a32 32 0 0029.952-20.736L835.648 704H512z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Burger.displayName = 'ElIconBurger'

export default Burger
