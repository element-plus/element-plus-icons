import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Box = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M317.056 128L128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0124.064 10.88l206.528 236.096A32 32 0 01960 332.032V928a32 32 0 01-32 32H96a32 32 0 01-32-32V332.032a32 32 0 017.936-21.12L278.4 75.008A32 32 0 01302.528 64z',
        },
        null,
      ),

      h('path', { d: 'M64 320h896v64H64z' }, null),

      h(
        'path',
        {
          d:
            'M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 01-32 32H416a32 32 0 01-32-32V320l64-256z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Box.displayName = 'Box'

export default Box
