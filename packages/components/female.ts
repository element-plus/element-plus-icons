import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 640a256 256 0 100-512 256 256 0 000 512zm0 64a320 320 0 110-640 320 320 0 010 640z'

const Female = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Female.displayName = 'Female';

export default Female;

