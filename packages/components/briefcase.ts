import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Briefcase = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Briefcase.displayName = 'ElIconBriefcase'

export default Briefcase
