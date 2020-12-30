import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const VideoPlay = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 64a448 448 0 110 896 448 448 0 010-896zm0 832a384 384 0 000-768 384 384 0 000 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656l249.472 166.336a48 48 0 010 79.872L474.624 718.272A48 48 0 01400 678.336V345.6a48 48 0 0174.624-39.936z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

VideoPlay.displayName = 'ElIconVideoPlay'

export default VideoPlay
