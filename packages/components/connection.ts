import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M640 384v64H448a128 128 0 00-128 128v128a128 128 0 00128 128h320a128 128 0 00128-128V576a128 128 0 00-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 01-192 192H448a192 192 0 01-192-192V576a192 192 0 01192-192h192z'

const Connection = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Connection.displayName = 'Connection';

export default Connection;

