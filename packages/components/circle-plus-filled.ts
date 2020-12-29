import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 64a448 448 0 110 896 448 448 0 010-896zm-38.4 409.6H326.4a38.4 38.4 0 100 76.8h147.2v147.2a38.4 38.4 0 0076.8 0V550.4h147.2a38.4 38.4 0 000-76.8H550.4V326.4a38.4 38.4 0 10-76.8 0v147.2z'

const CirclePlusFilled = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

CirclePlusFilled.displayName = 'CirclePlusFilled';

export default CirclePlusFilled;

