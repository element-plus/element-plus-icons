import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z'

const Histogram = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Histogram.displayName = 'Histogram';

export default Histogram;

