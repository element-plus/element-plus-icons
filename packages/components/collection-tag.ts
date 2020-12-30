import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const CollectionTag = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M256 128v698.88l196.032-156.864a96 96 0 01119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0132 32v797.44a32 32 0 01-51.968 24.96L531.968 720a32 32 0 00-39.936 0L243.968 918.4A32 32 0 01192 893.44V96a32 32 0 0132-32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

CollectionTag.displayName = 'ElIconCollectionTag'

export default CollectionTag
