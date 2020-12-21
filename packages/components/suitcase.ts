import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M128 384h768v-64a64 64 0 00-64-64H192a64 64 0 00-64 64v64zm0 64v320a64 64 0 0064 64h640a64 64 0 0064-64V448H128zm64-256h640a128 128 0 01128 128v448a128 128 0 01-128 128H192A128 128 0 0164 768V320a128 128 0 01128-128z'

const Suitcase = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Suitcase.displayName = 'Suitcase';

export default Suitcase;

