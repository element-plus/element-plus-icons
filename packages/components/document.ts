import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Document = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 01-32 32H160a32 32 0 01-32-32V96a32 32 0 0132-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Document.displayName = 'ElIconDocument'

export default Document
