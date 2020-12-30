import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Phone = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M79.36 432.256L591.744 944.64a32 32 0 0035.2 6.784l253.44-108.544a32 32 0 009.984-52.032l-153.856-153.92a32 32 0 00-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 00-5.952-36.928L233.152 133.568a32 32 0 00-52.032 10.048L72.512 397.056a32 32 0 006.784 35.2zm60.48-29.952l81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 01256 256h-64a192 192 0 00-192-192zm0-192V64a448 448 0 01448 448h-64a384 384 0 00-384-384z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Phone.displayName = 'ElIconPhone'

export default Phone
