import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M224 128v704h576V128H224zm-32-64h640a32 32 0 0132 32v768a32 32 0 01-32 32H192a32 32 0 01-32-32V96a32 32 0 0132-32z'

const School = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

School.displayName = 'School';

export default School;

