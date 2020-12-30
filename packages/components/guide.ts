import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Guide = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M640 608h-64V416h64v192zm0 160v160a32 32 0 01-32 32H416a32 32 0 01-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0132-32h192a32 32 0 0132 32v160z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M220.8 256l-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0132 32v224a32 32 0 01-32 32H206.4a32 32 0 01-23.936-10.752l-99.584-112a32 32 0 010-42.496l99.584-112A32 32 0 01206.4 192zm678.784 496l-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 00-32 32v224a32 32 0 0032 32h593.6a32 32 0 0023.936-10.752l99.584-112a32 32 0 000-42.496l-99.584-112A32 32 0 00828.48 544z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Guide.displayName = 'ElIconGuide'

export default Guide
