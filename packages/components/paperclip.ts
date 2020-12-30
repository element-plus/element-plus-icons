import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Paperclip = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M602.496 240.448A192 192 0 11874.048 512l-316.8 316.8A256 256 0 01195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 00512 783.552l316.8-316.8a128 128 0 10-181.056-181.056L353.6 579.904a32 32 0 1045.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 11-135.744-135.744l294.144-294.208z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Paperclip.displayName = 'ElIconPaperclip'

export default Paperclip
