import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M737.216 357.952L704 349.824l-11.776-32a192.064 192.064 0 00-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 00320 768h368a207.808 207.808 0 00207.808-208 208.32 208.32 0 00-158.592-202.048zm15.168-62.208A272.32 272.32 0 01959.744 560a271.808 271.808 0 01-271.552 272H320a256 256 0 01-57.536-505.536 256.128 256.128 0 01489.92-30.72z'

const MostlyCloudy = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

MostlyCloudy.displayName = 'MostlyCloudy';

export default MostlyCloudy;

