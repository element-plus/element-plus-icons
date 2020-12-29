import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M160 96.064l192 .192a32 32 0 010 64l-192-.192V352a32 32 0 01-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1164 0v191.936l192-.192a32 32 0 110 64l-192 .192zM864 96.064V96h64v256a32 32 0 11-64 0V160.064l-192 .192a32 32 0 110-64l192-.192zm0 831.872l-192-.192a32 32 0 010-64l192 .192V672a32 32 0 1164 0v256h-64v-.064z'

const FullScreen = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

FullScreen.displayName = 'FullScreen';

export default FullScreen;

