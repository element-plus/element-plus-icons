import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M736 800V160H160v640a64 64 0 0064 64h448a64 64 0 0064-64zm64-544h63.552a96 96 0 0196 96v224a96 96 0 01-96 96H800v128a128 128 0 01-128 128H224A128 128 0 0196 800V128a32 32 0 0132-32h640a32 32 0 0132 32v128zm0 64v288h63.552a32 32 0 0032-32V352a32 32 0 00-32-32H800z'

const Mug = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Mug.displayName = 'Mug';

export default Mug;

