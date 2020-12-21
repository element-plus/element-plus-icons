import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M192 736h640V128H256a64 64 0 00-64 64v544zm64-672h608a32 32 0 0132 32v672a32 32 0 01-32 32H160l-32 57.536V192A128 128 0 01256 64z'

const Collection = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Collection.displayName = 'Collection';

export default Collection;

