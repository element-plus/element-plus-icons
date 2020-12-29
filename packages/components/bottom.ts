import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M544 805.888V168a32 32 0 10-64 0v637.888L246.656 557.952a30.72 30.72 0 00-45.312 0 35.52 35.52 0 000 48.064l288 306.048a30.72 30.72 0 0045.312 0l288-306.048a35.52 35.52 0 000-48 30.72 30.72 0 00-45.312 0L544 805.824z'

const Bottom = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Bottom.displayName = 'Bottom';

export default Bottom;

