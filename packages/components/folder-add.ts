import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const FolderAdd = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0132 32v576a32 32 0 01-32 32H96a32 32 0 01-32-32V160a32 32 0 0132-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

FolderAdd.displayName = 'FolderAdd'

export default FolderAdd
