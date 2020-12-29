import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M640 608h-64V416h64v192zm0 160v160a32 32 0 01-32 32H416a32 32 0 01-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0132-32h192a32 32 0 0132 32v160z'

const Guide = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Guide.displayName = 'Guide';

export default Guide;

