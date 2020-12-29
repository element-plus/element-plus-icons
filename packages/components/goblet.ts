import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M544 638.4V896h96a32 32 0 110 64H384a32 32 0 110-64h96V638.4A320 320 0 01192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 01-288 318.4zM256 320a256 256 0 10512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z'

const Goblet = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Goblet.displayName = 'Goblet';

export default Goblet;

