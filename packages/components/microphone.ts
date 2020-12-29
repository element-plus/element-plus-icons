import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 128a128 128 0 00-128 128v256a128 128 0 10256 0V256a128 128 0 00-128-128zm0-64a192 192 0 01192 192v256a192 192 0 11-384 0V256A192 192 0 01512 64zm-32 832v-64a288 288 0 01-288-288v-32a32 32 0 0164 0v32a224 224 0 00224 224h64a224 224 0 00224-224v-32a32 32 0 1164 0v32a288 288 0 01-288 288v64h64a32 32 0 110 64H416a32 32 0 110-64h64z'

const Microphone = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Microphone.displayName = 'Microphone';

export default Microphone;

