import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const FirstAidKit = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M192 256a64 64 0 00-64 64v448a64 64 0 0064 64h640a64 64 0 0064-64V320a64 64 0 00-64-64H192zm0-64h640a128 128 0 01128 128v448a128 128 0 01-128 128H192A128 128 0 0164 768V320a128 128 0 01128-128z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M544 512h96a32 32 0 010 64h-96v96a32 32 0 01-64 0v-96h-96a32 32 0 010-64h96v-96a32 32 0 0164 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0132 32v128a32 32 0 01-32 32H320a32 32 0 01-32-32V96a32 32 0 0132-32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

FirstAidKit.displayName = 'FirstAidKit'

export default FirstAidKit
