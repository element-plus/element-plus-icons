import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M320 256a64 64 0 00-64 64v384a64 64 0 0064 64h384a64 64 0 0064-64V320a64 64 0 00-64-64H320zm0-64h384a128 128 0 01128 128v384a128 128 0 01-128 128H320a128 128 0 01-128-128V320a128 128 0 01128-128z'

const Cpu = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Cpu.displayName = 'Cpu';

export default Cpu;

