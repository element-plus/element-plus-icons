import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const AlarmClock = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 832a320 320 0 100-640 320 320 0 000 640zm0 64a384 384 0 110-768 384 384 0 010 768z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M292.288 824.576l55.424 32-48 83.136a32 32 0 11-55.424-32l48-83.136zm439.424 0l-55.424 32 48 83.136a32 32 0 1055.424-32l-48-83.136zM512 512h160a32 32 0 110 64H480a32 32 0 01-32-32V320a32 32 0 0164 0v192zM90.496 312.256A160 160 0 01312.32 90.496l-46.848 46.848a96 96 0 00-128 128L90.56 312.256zm835.264 0A160 160 0 00704 90.496l46.848 46.848a96 96 0 01128 128l46.912 46.912z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

AlarmClock.displayName = 'ElIconAlarmClock'

export default AlarmClock
