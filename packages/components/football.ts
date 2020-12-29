import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 960a448 448 0 110-896 448 448 0 010 896zm0-64a384 384 0 100-768 384 384 0 000 768z'

const Football = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Football.displayName = 'Football';

export default Football;

