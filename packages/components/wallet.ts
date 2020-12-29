import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M640 288h-64V128H128v704h384v32a32 32 0 0032 32H96a32 32 0 01-32-32V96a32 32 0 0132-32h512a32 32 0 0132 32v192z'

const Wallet = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Wallet.displayName = 'Wallet';

export default Wallet;

