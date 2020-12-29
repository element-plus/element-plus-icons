import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M224 768v96.064a64 64 0 0064 64h448a64 64 0 0064-64V768H224zm0-64h576V160a64 64 0 00-64-64H288a64 64 0 00-64 64v544zm32 288a96 96 0 01-96-96V128a96 96 0 0196-96h512a96 96 0 0196 96v768a96 96 0 01-96 96H256zm304-144a48 48 0 11-96 0 48 48 0 0196 0z'

const Iphone = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Iphone.displayName = 'Iphone';

export default Iphone;

