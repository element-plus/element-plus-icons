import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M224 160a64 64 0 00-64 64v576a64 64 0 0064 64h576a64 64 0 0064-64V224a64 64 0 00-64-64H224zm0-64h576a128 128 0 01128 128v576a128 128 0 01-128 128H224A128 128 0 0196 800V224A128 128 0 01224 96z'

const SetUp = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

SetUp.displayName = 'SetUp';

export default SetUp;

