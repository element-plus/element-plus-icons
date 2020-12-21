import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M624 475.968V640h144a128 128 0 01128 128H128a128 128 0 01128-128h144V475.968a192 192 0 11224 0zM128 896v-64h768v64H128z'

const Stamp = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Stamp.displayName = 'Stamp';

export default Stamp;

