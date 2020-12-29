import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512.064 578.368l-106.88 152.768a160 160 0 11-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1152.48-36.736l393.024 561.344a160 160 0 11-23.36 78.208l-106.88-152.704zm54.4-189.248l208.384-297.6a32 32 0 0152.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 10110.144-157.248 96 96 0 00-110.08 157.248zm643.84 0a96 96 0 10-110.08-157.248 96 96 0 00110.08 157.248z'

const Scissor = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Scissor.displayName = 'Scissor';

export default Scissor;

