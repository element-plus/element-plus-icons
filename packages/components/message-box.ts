import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const MessageBox = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0128.608 17.664l179.84 359.552A32 32 0 01960 519.552V864a32 32 0 01-32 32H96a32 32 0 01-32-32V519.552a32 32 0 013.392-14.336l179.776-359.552A32 32 0 01275.776 128z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

MessageBox.displayName = 'ElIconMessageBox'

export default MessageBox
