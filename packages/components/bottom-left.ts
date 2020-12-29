import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M256 768h416a32 32 0 110 64H224a32 32 0 01-32-32V352a32 32 0 0164 0v416z'

const BottomLeft = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

BottomLeft.displayName = 'BottomLeft';

export default BottomLeft;

