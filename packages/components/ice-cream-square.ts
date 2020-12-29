import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M416 640h256a32 32 0 0032-32V160a32 32 0 00-32-32H352a32 32 0 00-32 32v448a32 32 0 0032 32h64zm192 64v160a96 96 0 01-192 0V704h-64a96 96 0 01-96-96V160a96 96 0 0196-96h320a96 96 0 0196 96v448a96 96 0 01-96 96h-64zm-64 0h-64v160a32 32 0 1064 0V704z'

const IceCreamSquare = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

IceCreamSquare.displayName = 'IceCreamSquare';

export default IceCreamSquare;

