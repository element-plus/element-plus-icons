import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Operation = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M389.44 768a96.064 96.064 0 01181.12 0H896v64H570.56a96.064 96.064 0 01-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 01181.12 0H896v64H762.56a96.064 96.064 0 01-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 01181.12 0H896v64H442.56a96.064 96.064 0 01-181.12 0H128v-64h133.44z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Operation.displayName = 'Operation'

export default Operation
