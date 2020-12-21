import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M256 576v128h640V576H256zm-32-64h704a32 32 0 0132 32v192a32 32 0 01-32 32H224a32 32 0 01-32-32V544a32 32 0 0132-32z'

const Smoking = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Smoking.displayName = 'Smoking';

export default Smoking;

