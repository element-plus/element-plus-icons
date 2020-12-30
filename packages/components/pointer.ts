import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Pointer = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 00-112.896-3.456 44.416 44.416 0 00-8.96 62.208L332.8 870.4A64 64 0 00384 896h512V575.232a64 64 0 00-45.632-61.312l-205.952-61.76A96 96 0 01576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 11256.832 0v167.744a32 32 0 0022.784 30.656l206.016 61.76A128 128 0 01960 575.232V896a64 64 0 01-64 64H384a128 128 0 01-102.4-51.2L101.056 668.032A108.416 108.416 0 01128 512.512a158.272 158.272 0 01185.984 8.32L359.04 556.8z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Pointer.displayName = 'ElIconPointer'

export default Pointer
