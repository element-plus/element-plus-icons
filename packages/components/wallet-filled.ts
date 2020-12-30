import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const WalletFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M688 512a112 112 0 100 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 010-96h32a48 48 0 010 96zm-80-544l128 160H384l256-160z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

WalletFilled.displayName = 'ElIconWalletFilled'

export default WalletFilled
