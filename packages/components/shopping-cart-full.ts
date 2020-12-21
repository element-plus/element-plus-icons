import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M432 928a48 48 0 110-96 48 48 0 010 96zm320 0a48 48 0 110-96 48 48 0 010 96zM96 128a32 32 0 010-64h160a32 32 0 0131.36 25.728L320.64 256H928a32 32 0 0131.296 38.72l-96 448A32 32 0 01832 768H384a32 32 0 01-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z'

const ShoppingCartFull = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

ShoppingCartFull.displayName = 'ShoppingCartFull';

export default ShoppingCartFull;

