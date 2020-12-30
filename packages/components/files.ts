import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Files = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M128 384v448h768V384H128zm-32-64h832a32 32 0 0132 32v512a32 32 0 01-32 32H96a32 32 0 01-32-32V352a32 32 0 0132-32zM160 192h704v64H160zm96-128h512v64H256z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Files.displayName = 'ElIconFiles'

export default Files
