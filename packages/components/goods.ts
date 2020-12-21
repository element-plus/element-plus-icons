import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0131.808 28.8l57.6 576a32 32 0 01-31.808 35.2H131.328a32 32 0 01-31.808-35.2l57.6-576a32 32 0 0131.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 11-64 0v-96H384v96a32 32 0 01-64 0v-96z'

const Goods = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Goods.displayName = 'Goods';

export default Goods;

