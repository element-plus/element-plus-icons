import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 64a448 448 0 110 896 448 448 0 010-896zM288 512a38.4 38.4 0 0038.4 38.4h371.2a38.4 38.4 0 000-76.8H326.4A38.4 38.4 0 00288 512z'

const RemoveFilled = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

RemoveFilled.displayName = 'RemoveFilled';

export default RemoveFilled;

