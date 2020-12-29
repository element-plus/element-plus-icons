import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Tools = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M764.416 254.72a351.68 351.68 0 0186.336 149.184H960v192.064H850.752a351.68 351.68 0 01-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 01-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 01-86.336-149.312H64v-192h109.248a351.68 351.68 0 0186.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 01172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 10-384 0 192 192 0 00384 0z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Tools.displayName = 'Tools'

export default Tools
