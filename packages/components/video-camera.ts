import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const VideoCamera = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M704 768V256H128v512h576zm64-416l192-96v512l-192-96v128a32 32 0 01-32 32H96a32 32 0 01-32-32V224a32 32 0 0132-32h640a32 32 0 0132 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

VideoCamera.displayName = 'ElIconVideoCamera'

export default VideoCamera
