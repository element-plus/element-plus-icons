import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Checked = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Checked.displayName = 'Checked'

export default Checked
