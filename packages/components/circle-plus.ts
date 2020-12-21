import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M352 480h320a32 32 0 110 64H352a32 32 0 010-64z'

const CirclePlus = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

CirclePlus.displayName = 'CirclePlus';

export default CirclePlus;

