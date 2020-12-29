import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M352 768a32 32 0 100 64h448a32 32 0 0032-32V352a32 32 0 00-64 0v416H352z'

const BottomRight = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

BottomRight.displayName = 'BottomRight';

export default BottomRight;

