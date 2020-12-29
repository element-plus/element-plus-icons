import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const OfficeBuilding = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M192 128v704h384V128H192zm-32-64h448a32 32 0 0132 32v768a32 32 0 01-32 32H160a32 32 0 01-32-32V96a32 32 0 0132-32z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M640 384v448h192V384H640zm-32-64h256a32 32 0 0132 32v512a32 32 0 01-32 32H608a32 32 0 01-32-32V352a32 32 0 0132-32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

OfficeBuilding.displayName = 'OfficeBuilding'

export default OfficeBuilding
