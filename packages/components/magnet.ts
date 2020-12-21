import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M832 320V192H704v320a192 192 0 11-384 0V192H192v128h128v64H192v128a320 320 0 00640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 11-768 0V128h256v384a128 128 0 10256 0z'

const Magnet = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Magnet.displayName = 'Magnet';

export default Magnet;

