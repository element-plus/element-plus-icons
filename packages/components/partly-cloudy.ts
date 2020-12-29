import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M598.4 895.872H328.192a256 256 0 01-34.496-510.528A352 352 0 11598.4 895.872zm-271.36-64h272.256a288 288 0 10-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0026.88 382.848z'

const PartlyCloudy = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

PartlyCloudy.displayName = 'PartlyCloudy';

export default PartlyCloudy;

