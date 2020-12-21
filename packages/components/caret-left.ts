import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M672 192L288 511.936 672 832z'

const CaretLeft = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

CaretLeft.displayName = 'CaretLeft';

export default CaretLeft;

