import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M399.5 849.5a225 225 0 100-450 225 225 0 000 450zm0 56.25a281.25 281.25 0 110-562.5 281.25 281.25 0 010 562.5zM652.625 118.25h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z'

const Male = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Male.displayName = 'Male';

export default Male;

