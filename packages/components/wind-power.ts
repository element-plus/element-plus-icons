import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const WindPower = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zM576 418.624l128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 01960 215.68v144.64a96 96 0 01-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232l98.88-8.96A32 32 0 00896 360.32V215.68a32 32 0 00-29.12-31.872l-98.88-8.96v226.368z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

WindPower.displayName = 'WindPower'

export default WindPower
