import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M384 512a448 448 0 01215.872-383.296A384 384 0 00213.76 640h188.8A448.256 448.256 0 01384 512zM171.136 704a448 448 0 01636.992-575.296A384 384 0 00499.328 704h-328.32z'

const MoonNight = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

MoonNight.displayName = 'MoonNight';

export default MoonNight;

