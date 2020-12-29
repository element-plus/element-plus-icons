import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M192 128v704h384V128H192zm-32-64h448a32 32 0 0132 32v768a32 32 0 01-32 32H160a32 32 0 01-32-32V96a32 32 0 0132-32z'

const OfficeBuilding = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

OfficeBuilding.displayName = 'OfficeBuilding';

export default OfficeBuilding;

