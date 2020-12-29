import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const DocumentRemove = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M805.504 320L640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 01-32 32H160a32 32 0 01-32-32V96a32 32 0 0132-32zm192 512h320v64H352v-64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

DocumentRemove.displayName = 'DocumentRemove'

export default DocumentRemove
