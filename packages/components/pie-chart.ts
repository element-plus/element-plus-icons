import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M448 68.48v64.832A384.128 384.128 0 00512 896a384.128 384.128 0 00378.688-320h64.768A448.128 448.128 0 0164 512 448.128 448.128 0 01448 68.48z'

const PieChart = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

PieChart.displayName = 'PieChart';

export default PieChart;

