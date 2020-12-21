import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M82.56 640a448 448 0 11858.88 0h-67.2a384 384 0 10-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zM288 832h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z'

const Sunset = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Sunset.displayName = 'Sunset';

export default Sunset;

