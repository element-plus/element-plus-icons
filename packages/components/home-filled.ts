import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 128L128 447.936V896h255.936V640H640v256h255.936V447.936z'

const HomeFilled = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

HomeFilled.displayName = 'HomeFilled';

export default HomeFilled;

