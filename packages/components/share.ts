import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Share = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M679.872 348.8l-301.76 188.608a127.808 127.808 0 015.12 52.16l279.936 104.96a128 128 0 11-22.464 59.904l-279.872-104.96a128 128 0 11-16.64-166.272l301.696-188.608a128 128 0 1133.92 54.272z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Share.displayName = 'Share'

export default Share
