import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M199.232 125.568L90.624 379.008a32 32 0 006.784 35.2l512.384 512.384a32 32 0 0035.2 6.784l253.44-108.608a32 32 0 0010.048-52.032L769.6 633.92a32 32 0 00-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 00-5.952-36.928L251.2 115.52a32 32 0 00-51.968 10.048z'

const PhoneFilled = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

PhoneFilled.displayName = 'PhoneFilled';

export default PhoneFilled;

