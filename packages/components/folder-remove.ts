import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const FolderRemove = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0132 32v576a32 32 0 01-32 32H96a32 32 0 01-32-32V160a32 32 0 0132-32zm256 416h320v64H352v-64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

FolderRemove.displayName = 'ElIconFolderRemove'

export default FolderRemove
