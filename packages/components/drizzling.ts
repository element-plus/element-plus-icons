import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M739.328 291.328l-35.2-6.592-12.8-33.408a192.064 192.064 0 00-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 00-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0035.776-380.672zM959.552 480a256 256 0 01-256 256h-400A239.808 239.808 0 0163.744 496.192a240.32 240.32 0 01199.488-236.8 256.128 256.128 0 01487.872-30.976A256.064 256.064 0 01959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z'

const Drizzling = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Drizzling.displayName = 'Drizzling';

export default Drizzling;

