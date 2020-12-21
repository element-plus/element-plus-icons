import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M128 416v-48a144 144 0 01168.64-141.888 224.128 224.128 0 01430.72 0A144 144 0 01896 368v48a384 384 0 01-352 382.72V896h-64v-97.28A384 384 0 01128 416zm287.104-32.064h193.792a143.808 143.808 0 0158.88-132.736 160.064 160.064 0 00-311.552 0 143.808 143.808 0 0158.88 132.8zm-72.896 0a72 72 0 10-140.48 0h140.48zm339.584 0h140.416a72 72 0 10-140.48 0zM512 736a320 320 0 00318.4-288.064H193.6A320 320 0 00512 736zM384 896.064h256a32 32 0 110 64H384a32 32 0 110-64z'

const Dessert = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Dessert.displayName = 'Dessert';

export default Dessert;

