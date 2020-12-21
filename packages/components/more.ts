import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M176 416a112 112 0 100 224 112 112 0 000-224m0 64a48 48 0 110 96 48 48 0 010-96zm336-64a112 112 0 110 224 112 112 0 010-224zm0 64a48 48 0 100 96 48 48 0 000-96zm336-64a112 112 0 110 224 112 112 0 010-224zm0 64a48 48 0 100 96 48 48 0 000-96z'

const More = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

More.displayName = 'More';

export default More;

