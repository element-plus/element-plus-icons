import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M256 256h416a32 32 0 100-64H224a32 32 0 00-32 32v448a32 32 0 0064 0V256z'

const TopLeft = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

TopLeft.displayName = 'TopLeft';

export default TopLeft;

