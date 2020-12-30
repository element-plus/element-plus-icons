import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const PartlyCloudy = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M598.4 895.872H328.192a256 256 0 01-34.496-510.528A352 352 0 11598.4 895.872zm-271.36-64h272.256a288 288 0 10-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0026.88 382.848z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M139.84 501.888a256 256 0 11417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 10189.12 460.48a6003.84 6003.84 0 00-49.28 41.408z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

PartlyCloudy.displayName = 'ElIconPartlyCloudy'

export default PartlyCloudy
