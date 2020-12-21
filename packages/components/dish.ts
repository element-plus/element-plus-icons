import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M480 257.152V192h-96a32 32 0 010-64h256a32 32 0 110 64h-96v65.152A448 448 0 01955.52 768H68.48A448 448 0 01480 257.152zM128 704h768a384 384 0 10-768 0zM96 832h832a32 32 0 110 64H96a32 32 0 110-64z'

const Dish = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Dish.displayName = 'Dish';

export default Dish;

