import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M665.216 768l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 01-32-32V192H64a32 32 0 010-64h896a32 32 0 110 64h-64v544a32 32 0 01-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0132 32v64a32 32 0 01-64 0v-64a32 32 0 0132-32zm160-64a32 32 0 0132 32v128a32 32 0 01-64 0V416a32 32 0 0132-32zm160-64a32 32 0 0132 32v192a32 32 0 11-64 0V352a32 32 0 0132-32z'

const DataAnalysis = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

DataAnalysis.displayName = 'DataAnalysis';

export default DataAnalysis;

