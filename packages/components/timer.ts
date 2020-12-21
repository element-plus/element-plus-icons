import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 896a320 320 0 100-640 320 320 0 000 640zm0 64a384 384 0 110-768 384 384 0 010 768z'

const Timer = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Timer.displayName = 'Timer';

export default Timer;

