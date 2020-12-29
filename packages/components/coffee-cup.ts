import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M768 192a192 192 0 11-8 383.808A256.128 256.128 0 01512 768H320A256 256 0 0164 512V160a32 32 0 0132-32h640a32 32 0 0132 32v32zm0 64v256a128 128 0 100-256zM96 832h640a32 32 0 110 64H96a32 32 0 110-64zm32-640v320a192 192 0 00192 192h192a192 192 0 00192-192V192H128z'

const CoffeeCup = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

CoffeeCup.displayName = 'CoffeeCup';

export default CoffeeCup;

