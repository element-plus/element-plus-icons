import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M128.64 448a208 208 0 01193.536-191.552 224 224 0 01445.248 15.488A208.128 208.128 0 01894.784 448H896L548.8 983.68a32 32 0 01-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 00-286.208 0zm351.36 0h286.272a144 144 0 00-286.272 0zm-294.848 64l271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 01189.184-96.192 160 160 0 00-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z'

const IceCream = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

IceCream.displayName = 'IceCream';

export default IceCream;

