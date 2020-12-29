import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M704 320v96a32 32 0 01-32 32h-32V320H384v128h-32a32 32 0 01-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 11384 0h160a32 32 0 0132 32v640a32 32 0 01-32 32H160a32 32 0 01-32-32V288a32 32 0 0132-32h160zm64 0h256a128 128 0 10-256 0z'

const ShoppingBag = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

ShoppingBag.displayName = 'ShoppingBag';

export default ShoppingBag;

