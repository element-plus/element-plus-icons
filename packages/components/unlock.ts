import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M224 448a32 32 0 00-32 32v384a32 32 0 0032 32h576a32 32 0 0032-32V480a32 32 0 00-32-32H224zm0-64h576a96 96 0 0196 96v384a96 96 0 01-96 96H224a96 96 0 01-96-96V480a96 96 0 0196-96z'

const Unlock = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Unlock.displayName = 'Unlock';

export default Unlock;

