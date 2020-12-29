import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z'

const Right = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Right.displayName = 'Right';

export default Right;

