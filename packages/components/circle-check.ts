import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const CircleCheck = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M745.344 361.344a32 32 0 0145.312 45.312l-288 288a32 32 0 01-45.312 0l-160-160a32 32 0 1145.312-45.312L480 626.752l265.344-265.408z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

CircleCheck.displayName = 'CircleCheck'

export default CircleCheck
