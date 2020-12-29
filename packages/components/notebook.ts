import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Notebook = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M192 128v768h640V128H192zm-32-64h704a32 32 0 0132 32v832a32 32 0 01-32 32H160a32 32 0 01-32-32V96a32 32 0 0132-32z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zM96 384h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zM96 576h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zM96 768h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Notebook.displayName = 'Notebook'

export default Notebook
