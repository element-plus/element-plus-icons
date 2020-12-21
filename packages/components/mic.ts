import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M480 704h160a64 64 0 0064-64v-32h-96a32 32 0 010-64h96v-96h-96a32 32 0 010-64h96v-96h-96a32 32 0 010-64h96v-32a64 64 0 00-64-64H384a64 64 0 00-64 64v32h96a32 32 0 010 64h-96v96h96a32 32 0 010 64h-96v96h96a32 32 0 010 64h-96v32a64 64 0 0064 64h96zm64 64v128h192a32 32 0 110 64H288a32 32 0 110-64h192V768h-96a128 128 0 01-128-128V192A128 128 0 01384 64h256a128 128 0 01128 128v448a128 128 0 01-128 128h-96z'

const Mic = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Mic.displayName = 'Mic';

export default Mic;

