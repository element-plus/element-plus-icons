import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const CameraFilled = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M160 224a64 64 0 00-64 64v512a64 64 0 0064 64h704a64 64 0 0064-64V288a64 64 0 00-64-64H748.416l-46.464-92.672A64 64 0 00644.736 96H379.328a64 64 0 00-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 100-230.4 115.2 115.2 0 000 230.4zm0 140.8a256 256 0 110-512 256 256 0 010 512z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

CameraFilled.displayName = 'CameraFilled'

export default CameraFilled
