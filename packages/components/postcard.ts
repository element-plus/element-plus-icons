import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M160 224a32 32 0 00-32 32v512a32 32 0 0032 32h704a32 32 0 0032-32V256a32 32 0 00-32-32H160zm0-64h704a96 96 0 0196 96v512a96 96 0 01-96 96H160a96 96 0 01-96-96V256a96 96 0 0196-96z'

const Postcard = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Postcard.displayName = 'Postcard';

export default Postcard;

