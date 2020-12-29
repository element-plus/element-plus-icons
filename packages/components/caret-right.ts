import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M384 192v640l384-320.064z'

const CaretRight = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

CaretRight.displayName = 'CaretRight';

export default CaretRight;

