import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M384 523.392V928a32 32 0 0046.336 28.608l192-96A32 32 0 00640 832V523.392l280.768-343.104a32 32 0 10-49.536-40.576l-288 352A32 32 0 00576 512v300.224l-128 64V512a32 32 0 00-7.232-20.288L195.52 192H704a32 32 0 100-64H128a32 32 0 00-24.768 52.288L384 523.392z'

const Filter = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Filter.displayName = 'Filter';

export default Filter;

