import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Bicycle = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M256 832a128 128 0 100-256 128 128 0 000 256zm0 64a192 192 0 110-384 192 192 0 010 384z',
        },
        null,
      ),

      h(
        'path',
        { d: 'M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' },
        null,
      ),

      h(
        'path',
        {
          d:
            'M768 832a128 128 0 100-256 128 128 0 000 256zm0 64a192 192 0 110-384 192 192 0 010 384z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M480 192a32 32 0 010-64h160a32 32 0 0131.04 24.256l96 384a32 32 0 01-62.08 15.488L615.04 192H480zM96 384a32 32 0 010-64h128a32 32 0 0130.336 21.888l64 192a32 32 0 11-60.672 20.224L200.96 384H96z',
        },
        null,
      ),

      h(
        'path',
        { d: 'M373.376 599.808l-42.752-47.616 320-288 42.752 47.616z' },
        null,
      ),
    ],
  })
} as FunctionalComponent

Bicycle.displayName = 'ElIconBicycle'

export default Bicycle
