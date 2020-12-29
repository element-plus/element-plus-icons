import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M329.956 257.138a254.862 254.862 0 000 509.724h364.088a254.862 254.862 0 000-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 110 655.36H329.956a327.68 327.68 0 110-655.36z'

const TurnOff = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

TurnOff.displayName = 'TurnOff';

export default TurnOff;

