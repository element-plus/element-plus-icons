import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M288 128h608L736 384l160 256H288v320h-96V64h96v64z'

const Flag = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Flag.displayName = 'Flag';

export default Flag;

