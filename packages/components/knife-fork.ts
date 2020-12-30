import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const KnifeFork = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M256 410.56V96a32 32 0 0164 0v314.56A96 96 0 00384 320V96a32 32 0 0164 0v224a160 160 0 01-128 156.8V928a32 32 0 11-64 0V476.8A160 160 0 01128 320V96a32 32 0 0164 0v224a96 96 0 0064 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 11-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

KnifeFork.displayName = 'ElIconKnifeFork'

export default KnifeFork
