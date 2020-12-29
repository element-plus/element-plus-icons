import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z'

const Platform = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Platform.displayName = 'Platform';

export default Platform;

