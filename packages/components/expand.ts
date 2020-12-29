import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352l192 160-192 128V352z'

const Expand = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Expand.displayName = 'Expand';

export default Expand;

