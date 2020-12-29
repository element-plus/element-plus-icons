import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M768 256H353.6a32 32 0 110-64H800a32 32 0 0132 32v448a32 32 0 01-64 0V256z'

const TopRight = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

TopRight.displayName = 'TopRight';

export default TopRight;

