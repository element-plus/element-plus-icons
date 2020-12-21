import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 64a64 64 0 0164 64v64H448v-64a64 64 0 0164-64z'

const Bell = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Bell.displayName = 'Bell';

export default Bell;

