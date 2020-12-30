import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const UserFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M288 320a224 224 0 10448 0 224 224 0 10-448 0zm544 608H160a32 32 0 01-32-32v-96a160 160 0 01160-160h448a160 160 0 01160 160v96a32 32 0 01-32 32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

UserFilled.displayName = 'ElIconUserFilled'

export default UserFilled
