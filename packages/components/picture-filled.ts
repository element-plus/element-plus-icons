import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M96 896a32 32 0 01-32-32V160a32 32 0 0132-32h832a32 32 0 0132 32v704a32 32 0 01-32 32H96zm315.52-228.48l-68.928-68.928a32 32 0 00-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 00-49.216 0L458.752 665.408a32 32 0 01-47.232 2.112zM256 384a96 96 0 10192.064-.064A96 96 0 00256 384z'

const PictureFilled = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

PictureFilled.displayName = 'PictureFilled';

export default PictureFilled;

