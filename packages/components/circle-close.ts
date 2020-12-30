import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const CircleClose = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M466.752 512l-90.496-90.496a32 32 0 0145.248-45.248L512 466.752l90.496-90.496a32 32 0 1145.248 45.248L557.248 512l90.496 90.496a32 32 0 11-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 01-45.248-45.248L466.752 512z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

CircleClose.displayName = 'ElIconCircleClose'

export default CircleClose
