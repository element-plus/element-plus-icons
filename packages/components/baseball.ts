import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M195.2 828.8a448 448 0 11633.6-633.6 448 448 0 01-633.6 633.6zm45.248-45.248a384 384 0 10543.104-543.104 384 384 0 00-543.104 543.104z'

const Baseball = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Baseball.displayName = 'Baseball';

export default Baseball;

