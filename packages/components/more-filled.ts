import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M176 416a112 112 0 110 224 112 112 0 010-224zm336 0a112 112 0 110 224 112 112 0 010-224zm336 0a112 112 0 110 224 112 112 0 010-224z'

const MoreFilled = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

MoreFilled.displayName = 'MoreFilled';

export default MoreFilled;

