import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M192 384l320 384 320-384z'

const CaretBottom = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

CaretBottom.displayName = 'CaretBottom';

export default CaretBottom;

