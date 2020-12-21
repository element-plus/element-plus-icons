import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M256 832a128 128 0 100-256 128 128 0 000 256zm0 64a192 192 0 110-384 192 192 0 010 384z'

const Bicycle = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Bicycle.displayName = 'Bicycle';

export default Bicycle;

