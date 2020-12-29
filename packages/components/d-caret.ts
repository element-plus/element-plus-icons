import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 128l288 320H224l288-320zM224 576h576L512 896 224 576z'

const DCaret = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

DCaret.displayName = 'DCaret';

export default DCaret;

