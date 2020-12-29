import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M288 671.36v64.128A239.808 239.808 0 0163.744 496.192a240.32 240.32 0 01199.488-236.8 256.128 256.128 0 01487.872-30.976A256.064 256.064 0 01736 734.016v-64.768a192 192 0 003.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 00-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 00-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z'

const Lightning = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Lightning.displayName = 'Lightning';

export default Lightning;

