import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Management = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Management.displayName = 'ElIconManagement'

export default Management
