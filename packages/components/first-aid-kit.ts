import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M192 256a64 64 0 00-64 64v448a64 64 0 0064 64h640a64 64 0 0064-64V320a64 64 0 00-64-64H192zm0-64h640a128 128 0 01128 128v448a128 128 0 01-128 128H192A128 128 0 0164 768V320a128 128 0 01128-128z'

const FirstAidKit = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

FirstAidKit.displayName = 'FirstAidKit';

export default FirstAidKit;

