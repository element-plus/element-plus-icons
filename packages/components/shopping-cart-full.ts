import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const ShoppingCartFull = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M432 928a48 48 0 110-96 48 48 0 010 96zm320 0a48 48 0 110-96 48 48 0 010 96zM96 128a32 32 0 010-64h160a32 32 0 0131.36 25.728L320.64 256H928a32 32 0 0131.296 38.72l-96 448A32 32 0 01832 768H384a32 32 0 01-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M699.648 256L608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0198.304 0L836.352 320H379.648l179.2-215.04z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

ShoppingCartFull.displayName = 'ElIconShoppingCartFull'

export default ShoppingCartFull
